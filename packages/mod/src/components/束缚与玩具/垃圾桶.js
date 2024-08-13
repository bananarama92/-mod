import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "垃圾桶_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    AllowLock: true,
    Extended: true,
    MinOpacity: 0,
    Opacity: 0,
    Priority: 58,
    SetPose: ["Kneel"],
    Layer: [
        { Name: "轮子", Priority: 1, MinOpacity: 1 },
        { Name: "背景", Priority: 2, MinOpacity: 1 },
        { Name: "外框", MinOpacity: 1 },
        {
            Name: "垃圾桶",
            Alpha: [
                {
                    Group: [
                        "HairFront",
                        "HairBack",
                        "Bracelet",
                        "Cloth",
                        "ClothAccessory",
                        "ClothLower",
                        "Corset",
                        "Fluids",
                        "Garters",
                        "Gloves",
                        "HairAccessory1",
                        "HairAccessory2",
                        "HairAccessory3",
                        "Hat",
                        "ItemArms",
                        "ItemBreast",
                        "ItemButt",
                        "ItemHandheld",
                        "ItemHead",
                        "ItemHood",
                        "ItemLegs",
                        "ItemMisc",
                        "ItemNeck",
                        "ItemNose",
                        "ItemPelvis",
                        "ItemTorso",
                        "LeftAnklet",
                        "LeftHand",
                        "Mask",
                        "Mouth",
                        "Nipples",
                        "Panties",
                        "RightAnklet",
                        "RightHand",
                        "Shoes",
                        "Socks",
                        "SocksLeft",
                        "SocksRight",
                        "Suit",
                        "SuitLower",
                        "TailStraps",
                        "Wings",
                        "Bra",
                        "HairAccessory1",
                        "HairAccessory2",
                        "HairAccessory3",
                        "Cloth_笨笨笨蛋Luzi2",
                        "Cloth_笨笨蛋Luzi",
                        "ClothLower_笨笨笨蛋Luzi2",
                        "ClothLower_笨笨蛋Luzi",
                    ],
                    Masks: [
                        [0, 695, 500, 120], //下
                        [0, 175, 160, 1000], //左
                        [340, 175, 135, 1000], //右
                    ],
                },
            ],
        },
        {
            Name: "盖子",
            AllowTypes: { typed: [1, 2] },
            Alpha: [
                {
                    Group: [
                        "HairFront",
                        "HairBack",
                        "Bracelet",
                        "Cloth",
                        "ClothAccessory",
                        "ClothLower",
                        "Corset",
                        "Fluids",
                        "Garters",
                        "Gloves",
                        "HairAccessory1",
                        "HairAccessory2",
                        "HairAccessory3",
                        "Hat",
                        "ItemArms",
                        "ItemBreast",
                        "ItemButt",
                        "ItemHandheld",
                        "ItemHead",
                        "ItemHood",
                        "ItemLegs",
                        "ItemMisc",
                        "ItemNeck",
                        "ItemNose",
                        "ItemPelvis",
                        "ItemTorso",
                        "LeftAnklet",
                        "LeftHand",
                        "Mask",
                        "Mouth",
                        "Nipples",
                        "Panties",
                        "RightAnklet",
                        "RightHand",
                        "Shoes",
                        "Socks",
                        "SocksLeft",
                        "SocksRight",
                        "Suit",
                        "SuitLower",
                        "TailStraps",
                        "Wings",
                        "Bra",
                        "HairAccessory1",
                        "HairAccessory2",
                        "HairAccessory3",
                        "Cloth_笨笨笨蛋Luzi2",
                        "Cloth_笨笨蛋Luzi",
                        "ClothLower_笨笨笨蛋Luzi2",
                        "ClothLower_笨笨蛋Luzi",
                    ],
                    Masks: [
                        [0, -100, 500, 150], //上
                        [0, 0, 160, 1000], //左
                        [340, 0, 135, 1000], //右
                    ],
                },
            ],
        },
        { Name: "挡板", AllowTypes: { typed: 1 } },
        { Name: "图案", AllowTypes: { typed: 1 } },
    ],
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [{ Name: "打开盖子" }, { Name: "合上盖子" }, { Name: "打开挡板" }],
    BaselineProperty: { Opacity: 1 },
    ScriptHooks: {
        Init: PropertyOpacityInit,
        Load: PropertyOpacityLoad,
        Draw: PropertyOpacityDraw,
        Exit: PropertyOpacityExit,
    },
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemDevices垃圾桶_LuziSelect: "选择垃圾桶配置",
        ItemDevices垃圾桶_Luzi打开盖子: "打开盖子",
        ItemDevices垃圾桶_Luzi合上盖子: "合上盖子",
        ItemDevices垃圾桶_Luzi打开挡板: "打开挡板",

        ItemDevices垃圾桶_LuziSet合上盖子: "SourceCharacter合上了DestinationCharacter的盖子",
        ItemDevices垃圾桶_LuziSet打开盖子: "SourceCharacter打开了DestinationCharacter的盖子",
        ItemDevices垃圾桶_LuziSet打开挡板: "SourceCharacter打开了DestinationCharacter的挡板",
    },
    EN: {
        ItemDevices垃圾桶_LuziSelect: "Select Trash Bin Configuration",
        ItemDevices垃圾桶_Luzi打开盖子: "Open Lid",
        ItemDevices垃圾桶_Luzi合上盖子: "Close Lid",
        ItemDevices垃圾桶_Luzi打开挡板: "Open Flap",

        ItemDevices垃圾桶_LuziSet合上盖子: "SourceCharacter closed DestinationCharacter's lid",
        ItemDevices垃圾桶_LuziSet打开盖子: "SourceCharacter opened DestinationCharacter's lid",
        ItemDevices垃圾桶_LuziSet打开挡板: "SourceCharacter opened DestinationCharacter's baffle",
    },
};

const translations = {
    CN: "垃圾桶",
    EN: "Trash Can",
};

export default function () {
    AssetManager.addAsset("ItemDevices", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
