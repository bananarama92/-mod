import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "大腿束缚器",
    Fetish: ["Leather"],
    Left: 125,
    Top: 725,
    Difficulty: 5,
    Priority: 27,
    Time: 12,
    RemoveTime: 10,
    DefaultColor: ["#505050", "#BBBBBB"],
    Extended: false,
    AllowLock: true,
    DrawLocks: true,
    AllowTighten: true,
    Block: ["ItemBoots"],
    SetPose: ["LegsClosed"],
    Effect: [E.Slow, E.BlockWardrobe],
    AllowActivePose: ["Kneel", "Hogtied"],
    PoseMapping: {
        ...AssetPoseMapping.ItemFeet,
        LegsClosed: PoseType.DEFAULT,
        Kneel: PoseType.HIDE,
        Hogtied: PoseType.HIDE,
    },
    Alpha: [
        {
            Group: [
                "Socks",
                "SocksRight",
                "SocksLeft",
                "SuitLower",
                "ItemBoots",
            ],
            Masks: [[195, 746, 110, 28]],
        },
        {
            Group: [
                "Socks",
                "SocksRight",
                "SocksLeft",
                "SuitLower",
                "ItemBoots",
            ],
            Masks: [[195, 818, 110, 28]],
        },
    ],
    Layer: [
        { Name: "Straps", AllowColorize: true },
        { Name: "Details", ParentGroup: null, AllowColorize: true },
    ],
};

const translations = {
    CN: "大腿束缚器",
    EN: "Thigh restraint"
};

export default function () {
    AssetManager.addAsset("ItemLegs", asset, null, translations);
}
