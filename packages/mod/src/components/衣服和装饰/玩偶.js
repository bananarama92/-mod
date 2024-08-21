import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "玩偶_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    ParentGroup: null,
    Priority: 28,
    PoseMapping: {
        TapedHands: "TapedHands",
        Yoked: "TapedHands",
        OverTheHead: "TapedHands",
        BackBoxTie: "TapedHands",
        BackElbowTouch: "TapedHands",
        BackCuffs: "TapedHands",
        Hogtied: "TapedHands",
        AllFours: "TapedHands",
    },
    Layer: [
        // 玩具店
        { Name: "Saki", AllowTypes: { d: 1 } },
        { Name: "Luzi", AllowTypes: { d: 2 } },

        // 狼窝
        { Name: "吉娜", AllowTypes: { s: 1 } },
        { Name: "Ada", AllowTypes: { s: 2 } },
        { Name: "Luzi2", AllowTypes: { s: 3 } },
        { Name: "Reisigure", AllowTypes: { s: 4 } },
        { Name: "Atlantis", AllowTypes: { s: 5 } },
        { Name: "Xin", AllowTypes: { s: 6 } },

        // 芷窝
        { Name: "Ttong", AllowTypes: { z: 1 } },
        { Name: "ZforShort", AllowTypes: { z: 2 } },
        { Name: "Gin", AllowTypes: { z: 3 } },
        { Name: "Echo", AllowTypes: { z: 4 } },
        { Name: "ᐛ", AllowTypes: { z: 5 } },
        { Name: "ᐖ", AllowTypes: { z: 6 } },
        { Name: "芙缇娅", AllowTypes: { z: 7 } },
        
        // Catnest
        { Name: "XinLian", AllowTypes: { c: 1 } },
        { Name: "Zheiyun", AllowTypes: { c: 2 } },
        { Name: "Cyäegha", AllowTypes: { c: 3 } },
        { Name: "PumpkinPie", AllowTypes: { c: 4 } },
        { Name: "Lux", AllowTypes: { c: 5 } },
        { Name: "居x", AllowTypes: { c: 6 } },
        { Name: "Caius", AllowTypes: { c: 7 } },
        { Name: "Neko", AllowTypes: { c: 8 } },

        // 猫州猫庭府玩偶
        { Name: "Axa", AllowTypes: { f: 1 } },
        { Name: "Shirayuki", AllowTypes: { f: 2 } },
        { Name: "向归夜", AllowTypes: { f: 3 } },
        { Name: "Nail", AllowTypes: { f: 4 } },
        { Name: "Nekonya蓝", AllowTypes: { f: 5 } },

        // 路过的玩偶
        { Name: "li", AllowTypes: { l: 1 } },
        { Name: "YouXiang", AllowTypes: { l: 2 } },
        { Name: "Lilian", AllowTypes: { l: 3 } },
    ],
};

/** @type {ModularItemConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChangeWhenLocked: false,
    Modules: [
        {
            Name: "玩具店玩偶",
            DrawImages: false,
            Key: "d",
            Options: [{}, {}, {}],
        },
        {
            Name: "狼窝玩偶",
            DrawImages: false,
            Key: "s",
            Options: [{}, {}, {}, {}, {}, {}, {}],
        },
        {
            Name: "芷窝玩偶",
            DrawImages: false,
            Key: "z",
            Options: [{}, {}, {}, {}, {}, {}, {}, {}],
        },
        {
            Name: "Catnest玩偶",
            DrawImages: false,
            Key: "c",
            Options: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
        },
        {
            Name: "猫州猫庭府玩偶",
            DrawImages: false,
            Key: "f",
            Options: [{}, {}, {}, {}, {}, {}],
        },
        {
            Name: "路过的玩偶",
            DrawImages: false,
            Key: "l",
            Options: [{}, {}, {}, {}],
        },
    ],
};

/** @type {Translation.Dialog} */
const dialogs = {
    CN: {
        ItemMisc玩偶_LuziSelectBase: "选择房间",
        ItemMisc玩偶_LuziSelect玩具店玩偶: "选择玩具店玩偶",
        ItemMisc玩偶_LuziModule玩具店玩偶: "玩具店玩偶",
        ItemMisc玩偶_LuziOptiond0: "空",
        ItemMisc玩偶_LuziOptiond1: "Saki",
        ItemMisc玩偶_LuziOptiond2: "Luzi",
        ItemMisc玩偶_LuziSetd0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetd1: "SourceCharacter给了DestinationCharacter一只可爱的Saki玩偶.",
        ItemMisc玩偶_LuziSetd2: "SourceCharacter给了DestinationCharacter一只笨蛋的Luzi玩偶.",
        ItemMisc玩偶_LuziSelect狼窝玩偶: "选择狼窝玩偶",
        ItemMisc玩偶_LuziModule狼窝玩偶: "狼窝玩偶",
        ItemMisc玩偶_LuziOptions0: "空",
        ItemMisc玩偶_LuziOptions1: "吉娜",
        ItemMisc玩偶_LuziOptions2: "Ada",
        ItemMisc玩偶_LuziOptions3: "Luzi",
        ItemMisc玩偶_LuziOptions4: "Reisigure",
        ItemMisc玩偶_LuziOptions5: "Atlantis",
        ItemMisc玩偶_LuziOptions6: "Xin",
        ItemMisc玩偶_LuziSets0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSets1: "SourceCharacter给了DestinationCharacter一只可爱的吉娜玩偶.",
        ItemMisc玩偶_LuziSets2: "SourceCharacter给了DestinationCharacter一只可爱的Ada玩偶.",
        ItemMisc玩偶_LuziSets3: "SourceCharacter给了DestinationCharacter一只笨蛋的Luzi玩偶.",
        ItemMisc玩偶_LuziSets4: "SourceCharacter给了DestinationCharacter一只可爱的Reisigure玩偶.",
        ItemMisc玩偶_LuziSets5: "SourceCharacter给了DestinationCharacter一只可爱的Atlantis玩偶.",
        ItemMisc玩偶_LuziSets6: "SourceCharacter给了DestinationCharacter一只可爱的Xin玩偶.",
        ItemMisc玩偶_LuziSelect芷窝玩偶: "选择芷窝玩偶",
        ItemMisc玩偶_LuziModule芷窝玩偶: "芷窝玩偶",
        ItemMisc玩偶_LuziOptionz0: "空",
        ItemMisc玩偶_LuziOptionz1: "Ttong",
        ItemMisc玩偶_LuziOptionz2: "ZforShort",
        ItemMisc玩偶_LuziOptionz3: "Gin",
        ItemMisc玩偶_LuziOptionz4: "Echo",
        ItemMisc玩偶_LuziOptionz5: "ᐛ",
        ItemMisc玩偶_LuziOptionz6: "ᐖ",
        ItemMisc玩偶_LuziOptionz7: "芙缇娅",
        ItemMisc玩偶_LuziSetz0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetz1: "SourceCharacter给了DestinationCharacter一只可爱的Ttong玩偶.",
        ItemMisc玩偶_LuziSetz2: "SourceCharacter给了DestinationCharacter一只可爱的ZforShort玩偶.",
        ItemMisc玩偶_LuziSetz3: "SourceCharacter给了DestinationCharacter一只可爱的Gin玩偶.",
        ItemMisc玩偶_LuziSetz4: "SourceCharacter给了DestinationCharacter一只可爱的Echo玩偶.",
        ItemMisc玩偶_LuziSetz5: "SourceCharacter给了DestinationCharacter一只可爱的ᐛ玩偶.",
        ItemMisc玩偶_LuziSetz6: "SourceCharacter给了DestinationCharacter一只可爱的ᐖ玩偶.",
        ItemMisc玩偶_LuziSetz7: "SourceCharacter给了DestinationCharacter一只可爱的芙缇娅玩偶.",
        ItemMisc玩偶_LuziSelectCatnest玩偶: "选择Catnest玩偶",
        ItemMisc玩偶_LuziModuleCatnest玩偶: "Catnest玩偶",
        ItemMisc玩偶_LuziOptionc0: "空",
        ItemMisc玩偶_LuziOptionc1: "XinLian",
        ItemMisc玩偶_LuziOptionc2: "Zheiyun",
        ItemMisc玩偶_LuziOptionc3: "Cyäegha",
        ItemMisc玩偶_LuziOptionc4: "PumpkinPie",
        ItemMisc玩偶_LuziOptionc5: "Lux",
        ItemMisc玩偶_LuziOptionc6: "居x",
        ItemMisc玩偶_LuziOptionc7: "Caius",
        ItemMisc玩偶_LuziOptionc8: "Neko",
        ItemMisc玩偶_LuziSetc0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetc1: "SourceCharacter给了DestinationCharacter一只可爱的XinLian玩偶.",
        ItemMisc玩偶_LuziSetc2: "SourceCharacter给了DestinationCharacter一只可爱的Zheiyun玩偶.",
        ItemMisc玩偶_LuziSetc3: "SourceCharacter给了DestinationCharacter一只可爱的Cyäegha玩偶.",
        ItemMisc玩偶_LuziSetc4: "SourceCharacter给了DestinationCharacter一只可爱的PumpkinPie玩偶.",
        ItemMisc玩偶_LuziSetc5: "SourceCharacter给了DestinationCharacter一只可爱的Lux玩偶.",
        ItemMisc玩偶_LuziSetc6: "SourceCharacter给了DestinationCharacter一只可爱的居x玩偶.",
        ItemMisc玩偶_LuziSetc7: "SourceCharacter给了DestinationCharacter一只可爱的Caius玩偶.",
        ItemMisc玩偶_LuziSetc8: "SourceCharacter给了DestinationCharacter一只可爱的Neko玩偶.",
        ItemMisc玩偶_LuziSelect猫州猫庭府玩偶: "选择猫州猫庭府玩偶",
        ItemMisc玩偶_LuziModule猫州猫庭府玩偶: "猫州猫庭府玩偶",
        ItemMisc玩偶_LuziOptionf0: "空",
        ItemMisc玩偶_LuziOptionf1: "Axa",
        ItemMisc玩偶_LuziOptionf2: "Shirayuki",
        ItemMisc玩偶_LuziOptionf3: "向归夜",
        ItemMisc玩偶_LuziOptionf4: "Nail",
        ItemMisc玩偶_LuziOptionf5: "Nekonya(蓝)",
        ItemMisc玩偶_LuziSetf0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetf1: "SourceCharacter给了DestinationCharacter一只可爱的Axa玩偶.",
        ItemMisc玩偶_LuziSetf2: "SourceCharacter给了DestinationCharacter一只可爱的Shirayuki玩偶.",
        ItemMisc玩偶_LuziSetf3: "SourceCharacter给了DestinationCharacter一只可爱的向归夜玩偶.",
        ItemMisc玩偶_LuziSetf4: "SourceCharacter给了DestinationCharacter一只可爱的Nail玩偶.",
        ItemMisc玩偶_LuziSetf5: "SourceCharacter给了DestinationCharacter一只可爱的Nekonya(蓝)玩偶.",
        ItemMisc玩偶_LuziSelect路过的玩偶: "选择路过的玩偶",
        ItemMisc玩偶_LuziModule路过的玩偶: "路过的玩偶",
        ItemMisc玩偶_LuziOptionl0: "空",
        ItemMisc玩偶_LuziOptionl1: "li",
        ItemMisc玩偶_LuziOptionl2: "YouXiang",
        ItemMisc玩偶_LuziOptionl3: "Lilian",
        ItemMisc玩偶_LuziSetl0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetl1: "SourceCharacter给了DestinationCharacter一只路过的li玩偶.",
        ItemMisc玩偶_LuziSetl2: "SourceCharacter给了DestinationCharacter一只可爱的YouXiang玩偶.",
        ItemMisc玩偶_LuziSetl3: "SourceCharacter给了DestinationCharacter一只可爱的Lilian玩偶.",
    },
    EN: {
        ItemMisc玩偶_LuziSelectBase: "Select Room",
        ItemMisc玩偶_LuziSelect玩具店玩偶: "Select Toy Shop Doll",
        ItemMisc玩偶_LuziModule玩具店玩偶: "Toy Shop Doll",
        ItemMisc玩偶_LuziOptiond0: "Empty",
        ItemMisc玩偶_LuziOptiond1: "Saki",
        ItemMisc玩偶_LuziOptiond2: "Luzi",
        ItemMisc玩偶_LuziSetd0: "SourceCharacter removes the doll from DestinationCharacter's hand.",
        ItemMisc玩偶_LuziSetd1: "SourceCharacter gives DestinationCharacter a cute Saki doll.",
        ItemMisc玩偶_LuziSetd2: "SourceCharacter gives DestinationCharacter a silly Luzi doll.",
        ItemMisc玩偶_LuziSelect狼窝玩偶: "Select Wolf Den Doll",
        ItemMisc玩偶_LuziModule狼窝玩偶: "Wolf Den Doll",
        ItemMisc玩偶_LuziOptions0: "Empty",
        ItemMisc玩偶_LuziOptions1: "吉娜",
        ItemMisc玩偶_LuziOptions2: "Ada",
        ItemMisc玩偶_LuziOptions3: "Luzi",
        ItemMisc玩偶_LuziOptions4: "Reisigure",
        ItemMisc玩偶_LuziOptions5: "Atlantis",
        ItemMisc玩偶_LuziOptions6: "Xin",
        ItemMisc玩偶_LuziSets0: "SourceCharacter removes the doll from DestinationCharacter's hand.",
        ItemMisc玩偶_LuziSets1: "SourceCharacter gives DestinationCharacter a cute 吉娜 doll.",
        ItemMisc玩偶_LuziSets2: "SourceCharacter gives DestinationCharacter a cute Ada doll.",
        ItemMisc玩偶_LuziSets3: "SourceCharacter gives DestinationCharacter a silly Luzi doll.",
        ItemMisc玩偶_LuziSets4: "SourceCharacter gives DestinationCharacter a cute Reisigure doll.",
        ItemMisc玩偶_LuziSets5: "SourceCharacter gives DestinationCharacter a cute Atlantis doll.",
        ItemMisc玩偶_LuziSets6: "SourceCharacter gives DestinationCharacter a cute Xin doll.",
        ItemMisc玩偶_LuziSelect芷窝玩偶: "Select 芷窝 Doll",
        ItemMisc玩偶_LuziModule芷窝玩偶: "芷窝 Doll",
        ItemMisc玩偶_LuziOptionz0: "Empty",
        ItemMisc玩偶_LuziOptionz1: "Ttong",
        ItemMisc玩偶_LuziOptionz2: "ZforShort",
        ItemMisc玩偶_LuziOptionz3: "Gin",
        ItemMisc玩偶_LuziOptionz4: "Echo",
        ItemMisc玩偶_LuziOptionz5: "ᐛ",
        ItemMisc玩偶_LuziOptionz6: "ᐖ",
        ItemMisc玩偶_LuziOptionz7: "芙缇娅",
        ItemMisc玩偶_LuziSetz0: "SourceCharacter removes the doll from DestinationCharacter's hand.",
        ItemMisc玩偶_LuziSetz1: "SourceCharacter gives DestinationCharacter a cute Ttong doll.",
        ItemMisc玩偶_LuziSetz2: "SourceCharacter gives DestinationCharacter a cute ZforShort doll.",
        ItemMisc玩偶_LuziSetz3: "SourceCharacter gives DestinationCharacter a cute Gin doll.",
        ItemMisc玩偶_LuziSetz4: "SourceCharacter gives DestinationCharacter a cute Echo doll.",
        ItemMisc玩偶_LuziSetz5: "SourceCharacter gives DestinationCharacter a cute ᐛ doll.",
        ItemMisc玩偶_LuziSetz6: "SourceCharacter gives DestinationCharacter a cute ᐖ doll.",
        ItemMisc玩偶_LuziSetz7: "SourceCharacter gives DestinationCharacter a cute 芙缇娅 doll.",
        ItemMisc玩偶_LuziSelectCatnest玩偶: "Select Catnest Doll",
        ItemMisc玩偶_LuziModuleCatnest玩偶: "Catnest Doll",
        ItemMisc玩偶_LuziOptionc0: "Empty",
        ItemMisc玩偶_LuziOptionc1: "XinLian",
        ItemMisc玩偶_LuziOptionc2: "Zheiyun",
        ItemMisc玩偶_LuziOptionc3: "Cyäegha",
        ItemMisc玩偶_LuziOptionc4: "PumpkinPie",
        ItemMisc玩偶_LuziOptionc5: "Lux",
        ItemMisc玩偶_LuziOptionc6: "居x",
        ItemMisc玩偶_LuziOptionc7: "Caius",
        ItemMisc玩偶_LuziOptionc8: "Neko",
        ItemMisc玩偶_LuziSetc0: "SourceCharacter removes the doll from DestinationCharacter's hand.",
        ItemMisc玩偶_LuziSetc1: "SourceCharacter gives DestinationCharacter a cute XinLian doll.",
        ItemMisc玩偶_LuziSetc2: "SourceCharacter gives DestinationCharacter a cute Zheiyun doll.",
        ItemMisc玩偶_LuziSetc3: "SourceCharacter gives DestinationCharacter a cute Cyäegha doll.",
        ItemMisc玩偶_LuziSetc4: "SourceCharacter gives DestinationCharacter a cute PumpkinPie doll.",
        ItemMisc玩偶_LuziSetc5: "SourceCharacter gives DestinationCharacter a cute Lux doll.",
        ItemMisc玩偶_LuziSetc6: "SourceCharacter gives DestinationCharacter a cute 居x doll.",
        ItemMisc玩偶_LuziSetc7: "SourceCharacter gives DestinationCharacter a cute Caius doll.",
        ItemMisc玩偶_LuziSetc8: "SourceCharacter gives DestinationCharacter a cute Neko doll.",
        ItemMisc玩偶_LuziSelect猫州猫庭府玩偶: "Select 猫州猫庭府 Doll",
        ItemMisc玩偶_LuziModule猫州猫庭府玩偶: "猫州猫庭府 Doll",
        ItemMisc玩偶_LuziOptionf0: "Empty",
        ItemMisc玩偶_LuziOptionf1: "Axa",
        ItemMisc玩偶_LuziOptionf2: "Shirayuki",
        ItemMisc玩偶_LuziOptionf3: "向归夜",
        ItemMisc玩偶_LuziOptionf4: "Nail",
        ItemMisc玩偶_LuziOptionf5: "Nekonya(蓝)",
        ItemMisc玩偶_LuziSetf0: "SourceCharacter removes the doll from DestinationCharacter's hand.",
        ItemMisc玩偶_LuziSetf1: "SourceCharacter gives DestinationCharacter a cute Axa doll.",
        ItemMisc玩偶_LuziSetf2: "SourceCharacter gives DestinationCharacter a cute Shirayuki doll.",
        ItemMisc玩偶_LuziSetf3: "SourceCharacter gives DestinationCharacter a cute 向归夜 doll.",
        ItemMisc玩偶_LuziSetf4: "SourceCharacter gives DestinationCharacter a cute Nail doll.",
        ItemMisc玩偶_LuziSetf5: "SourceCharacter gives DestinationCharacter a cute Nekonya(blue) doll.",
        ItemMisc玩偶_LuziSelect路过的玩偶: "Select Passing Doll",
        ItemMisc玩偶_LuziModule路过的玩偶: "Passing Doll",
        ItemMisc玩偶_LuziOptionl0: "Empty",
        ItemMisc玩偶_LuziOptionl1: "li",
        ItemMisc玩偶_LuziOptionl2: "YouXiang",
        ItemMisc玩偶_LuziOptionl3: "Lilian",
        ItemMisc玩偶_LuziSetl0: "SourceCharacter removes the doll from DestinationCharacter's hand.",
        ItemMisc玩偶_LuziSetl1: "SourceCharacter gives DestinationCharacter a passing li doll.",
        ItemMisc玩偶_LuziSetl2: "SourceCharacter gives DestinationCharacter a cute YouXiang doll.",
        ItemMisc玩偶_LuziSetl3: "SourceCharacter gives DestinationCharacter a cute Lilian doll.",
    },
};

const translations = { CN: "玩偶", EN: "Plushies" };

export default function () {
    AssetManager.addAsset("ItemMisc", asset, extended, translations);
    AssetManager.addCustomDialog(dialogs);
}
