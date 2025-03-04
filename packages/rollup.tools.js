const fs = require("fs");
const path = require("path");
const packageJSON = require("./package.json");
const commonjs = require("@rollup/plugin-commonjs");
const resolve = require("@rollup/plugin-node-resolve");
const replace = require("@rollup/plugin-replace");
const copy = require("rollup-plugin-copy");
const terser = require("@rollup/plugin-terser");
const alias = require("@rollup/plugin-alias");
const css = require("rollup-plugin-import-css");

/**
 * 分析相对路径，与path.relative()不同的是，返回的路径会保持"./"开头
 * @param {string} from
 * @param {string} to
 * @returns {string}
 */
function relativePath(from, to) {
    const ret = path.relative(from, to).replace(/\\/g, "/");
    if (ret == "") return ".";
    return !ret.startsWith("./") ? `./${ret}` : ret;
}

/**
 * 收集组件，生成import语句和setup语句
 * @param { string } componentsDir 组件目录
 * @param { string } baseDir 组件目录是一组相对目录，这些目录的基础目录
 * @param { string } importStartDir import语句的起始目录
 * @returns { { imports: string, setups: string } }
 */
function collectComponents(componentsDir, baseDir, importStartDir) {
    imports = [];
    setups = [];

    const compDir = `${baseDir}/${componentsDir}`;

    const files = ((dir) => {
        let dirWork = [dir];
        let files = [];
        while (dirWork.length > 0) {
            const dir = dirWork.pop();
            const rDir = relativePath(importStartDir, dir);

            fs.readdirSync(dir, { withFileTypes: true }).forEach((file) => {
                if (file.isDirectory()) dirWork.push(`${dir}/${file.name}`);
                else if (file.isFile() && file.name.endsWith(".js")) {
                    const content = fs
                        .readFileSync(`${dir}/${file.name}`, "utf8")
                        .replace(/\/\/.*\n?|\/\*.*\*\//gm, "");
                    if (!content.match(/export\s+default\s+function\s*\(/)) return;
                    const fileName = file.name.replace(".js", "");
                    files.push({ name: fileName, path: `${rDir}/${fileName}` });
                }
            });
        }
        return files;
    })(compDir);

    files.forEach((file) => {
        imports.push(`import ${file.name} from "${file.path}";`);
        setups.push(`${file.name}();`);
    });

    imports = imports.join("\n");
    setups = setups.join("\n");

    return { imports, setups };
}

/**
 * 从package.json中构建mod信息
 * @param {Object} packageObj 通过require()加载的package.json对象
 * @returns { { name: string, fullName: string, version: string, repo?: string } }
 */
function buildModInfo(packageObj) {
    return {
        name: `${packageObj.displayName}`,
        fullName: `${packageObj.modFullName}`,
        version: `${packageObj.version}`,
        repo: (() => {
            if (!packageObj.repository || !packageObj.repository.url) return undefined;
            if (packageObj.repository.url.startsWith("git+"))
                return `${packageObj.repository.url.replace("git+", "").replace(".git", "")}`;
            return `${packageObj.repository.url.replace(".git", "")}`;
        })(),
    };
}

/**
 * 从package.json中构建rollup设置
 * @param {Object} packageObj 通过require()加载的package.json对象
 * @param {boolean} debugFlag 是否为debug模式
 * @param {boolean} betaFlag 是否为beta模式
 * @returns { { input: string, output: string, loaderName: string, author: string, description:string, componentDir: string, assets: { location: string, assets: string[] }, debug: boolean } }
 */
function buildRollupSetting(packageObj, debugFlag, betaFlag) {
    const ret = { ...packageObj.rollupSetting };
    if (betaFlag) {
        ret.output = packageObj.rollupSetting.beta.output ?? ret.output;
        ret.loaderName = packageObj.rollupSetting.beta.loaderName ?? ret.loaderName;
    }
    ret.debug = !!debugFlag;
    ret.author = packageObj.author;
    ret.description = packageObj.description;
    return ret;
}

/**
 * @typedef { string | AssetOverrideContainer } AssetOverrideLeaf
 * @typedef { Record<string, AssetOverrideLeaf> } AssetOverrideContainer
 * 读取assets映射
 * @param {string} startDir 基础目录
 * @param {string[]} assetDirs 资源目录
 * @returns { AssetOverrideContainer } 资源映射表
 */
function readAssetsMapping(startDir, assetDirs) {
    let workingDir = [...assetDirs];
    let assets = {};

    function makeLeaf(fpath) {
        let curDir = assets;
        let dirs = path.dirname(fpath).split(/\\|\//);
        let file = path.basename(fpath);

        while (dirs.length > 0) {
            const cur = dirs.shift();
            if (cur === ".") continue;
            if (!curDir[cur]) curDir[cur] = {};
            curDir = curDir[cur];
        }

        if (typeof curDir[file] === "number") curDir += 1;
        else curDir[file] = 1;
    }

    while (workingDir.length > 0) {
        const dir = workingDir.pop();

        fs.readdirSync(path.join(startDir, dir), { withFileTypes: true }).forEach((file) => {
            if (file.isDirectory()) workingDir.push(`${dir}/${file.name}`);
            else if (file.isFile()) makeLeaf(`${dir}/${file.name}`);
        });
    }
    return assets;
}

/**
 * @param { string } curDir
 * @param { string } baseURL
 * @param { ReturnType<typeof buildModInfo> } modInfo
 * @param { ReturnType<typeof buildRollupSetting> } rollupSetting
 * @param { boolean } [betaFlag]
 */
function createRollupConfig(curDir, baseURL, modInfo, rollupSetting, betaFlag = false) {
    const buildDestDir = `${process.env.INIT_CWD}/public/`;
    const curDirRelative = relativePath(".", curDir);

    const config = {
        input: `${curDirRelative}/${rollupSetting.input}`,
        output: {
            file: `${buildDestDir}/${rollupSetting.output}`,
            format: "iife",
            sourcemap: "inline",
            banner: ``,
        },
        treeshake: true,
    };

    const componentsImports = rollupSetting.componentDir
        ? collectComponents(rollupSetting.componentDir, curDirRelative, rollupSetting.componentDir)
        : { imports: "", setups: "" };

    const assetMapping = rollupSetting.assets
        ? JSON.stringify(readAssetsMapping(rollupSetting.assets.location, rollupSetting.assets.assets))
        : "{}";

    const baseURL_ = baseURL.endsWith("/") ? baseURL : `${baseURL}/`;

    const loader_replaces = {
        __base_url__: `${baseURL.endsWith("/") ? baseURL.substring(0, baseURL.length - 1) : baseURL}`,
        __description__: rollupSetting.description,
        __name__: modInfo.name,
        __author__: rollupSetting.author,
        __script_file__: rollupSetting.output,

        __mod_name__: `"${modInfo.name}"`,
        __mod_full_name__: `"${modInfo.fullName}"`,
        __mod_version__: `"${modInfo.version}-${betaFlag ? "beta" : ""}"`,
        __mod_repo__: modInfo.repo ? `"${modInfo.repo}"` : "undefined",
        __mod_asset_overrides__: assetMapping,
        __mod_base_url__: `"${baseURL}"`,
        __mod_resource_base_url__: `"${baseURL_}${betaFlag ? "beta/" : ""}"`,
        __mod_rollup_imports__: componentsImports.imports,
        __mod_rollup_setup__: componentsImports.setups,
    };

    return {
        ...config,
        plugins: [
            copy({
                targets: [
                    {
                        src: `${curDirRelative}/../loader.template.user.js`,
                        dest: buildDestDir,
                        rename: rollupSetting.loaderName,
                        transform: (contents, filename) =>
                            Object.entries(loader_replaces).reduce((pv, [from, to]) => {
                                return pv.replace(from, to);
                            }, contents.toString()),
                    },
                ],
            }),
            replace({
                ...loader_replaces,
                preventAssignment: false,
            }),
            alias({
                entries: {
                    "@mod-utils": `${curDir}/../utils`,
                    "bondage-club-mod-sdk": `${curDir}/node_modules/bondage-club-mod-sdk`,
                },
            }),
            commonjs(),
            resolve({ browser: true }),
            css({ inject: true }),
            ...(rollupSetting.debug ? [] : [terser({ sourceMap: true })]),
        ],
    };
}

module.exports = (cliArgs) => {
    const debug = !!cliArgs.configDebug;
    const baseURL = cliArgs.configBaseURL;
    const beta = !!cliArgs.configBeta;

    const modInfo = buildModInfo(packageJSON);
    const setting = buildRollupSetting(packageJSON, debug, beta);

    const log = (msg) => {
        console.log(`[${modInfo.name}] ${msg}`);
    };

    if (debug) log("Debug mode enabled");
    if (!baseURL || typeof baseURL !== "string") throw new Error("No deploy site specified");

    const baseURL_ = baseURL.endsWith("/") ? baseURL : `${baseURL}/`;

    log(`Deploying to ${baseURL_}`);
    log(`Build time: ${new Date().toLocaleString("zh-CN", { hour12: false })}`);

    return createRollupConfig(__dirname, baseURL, modInfo, setting, beta);
};
