import { Option } from "@mod-utils/fp";
// import { unit } from "@mod-utils/fp";
import ModManager from "@mod-utils/ModManager";
import AssetManager from "@mod-utils/AssetManager";
import ChatRoomOrder from "@mod-utils/ChatRoomOrder";

/** @type {CustomGroupedAssetDefinitions} */
const assets = {
    ItemAddon: [
        {
            Name: "被子左边_Luzi",
            Random: false,
            Top: -260,
            Left: 0,
            Difficulty: 1,
            SelfBondage: 0,
            DefaultColor: ["#99A2AB", "Default"],
            Layer: [{ Name: "外" }, { Name: "内" }],
        },
        {
            Name: "被子右边_Luzi",
            Random: false,
            Top: -260,
            Left: -210,
            Difficulty: 1,
            SelfBondage: 0,
            DefaultColor: ["#99A2AB", "Default"],
            Layer: [{ Name: "外" }, { Name: "内" }],
        },
    ],
    ItemDevices: [
        {
            Name: "床左边_Luzi",
            Random: false,
            Top: -260,
            Left: 0,
            Priority: 1,
            Difficulty: -20,
            SelfBondage: 0,
            Time: 5,
            RemoveTime: 5,
            RemoveAtLogin: true,
            OverrideHeight: { Height: 20, HeightRatioProportion: 1, Priority: 21 },
            DefaultColor: ["#523629", "#888990", "#808284"],
            RemoveItemOnRemove: [
                { Group: "ItemAddon", Name: "Covers" },
                { Group: "ItemAddon", Name: "被子左边_Luzi" },
                { Group: "ItemAddon", Name: "被子右边_Luzi" },
                { Group: "ItemAddon", Name: "BedRopes" },
                { Group: "ItemAddon", Name: "BedStraps" },
                { Group: "ItemAddon", Name: "BedTape" },
                { Group: "ItemAddon", Name: "BedChains" },
                { Group: "ItemArms", Name: "UnderBedBondageCuffs" },
                { Group: "ItemArms", Name: "MedicalBedRestraints" },
                { Group: "ItemArms", Name: "HempRope", TypeRecord: { typed: 11 } },
                { Group: "ItemLegs", Name: "MedicalBedRestraints" },
                { Group: "ItemFeet", Name: "HempRope", TypeRecord: { typed: 6 } },
                { Group: "ItemFeet", Name: "MedicalBedRestraints" },
            ],
            Effect: [E.Mounted, E.OnBed],
            Layer: [{ Name: "骨架" }, { Name: "床垫" }, { Name: "枕头" }],
        },
        {
            Name: "床右边_Luzi",
            Random: false,
            Top: -260,
            Left: -110,
            Priority: 1,
            Difficulty: -20,
            SelfBondage: 0,
            Time: 5,
            RemoveTime: 5,
            RemoveAtLogin: true,
            DefaultColor: ["#523629", "#888990", "#808284"],
            OverrideHeight: { Height: 20, HeightRatioProportion: 1, Priority: 21 },
            RemoveItemOnRemove: [
                { Group: "ItemAddon", Name: "Covers" },
                { Group: "ItemAddon", Name: "被子左边_Luzi" },
                { Group: "ItemAddon", Name: "被子右边_Luzi" },
                { Group: "ItemAddon", Name: "BedRopes" },
                { Group: "ItemAddon", Name: "BedStraps" },
                { Group: "ItemAddon", Name: "BedTape" },
                { Group: "ItemAddon", Name: "BedChains" },
                { Group: "ItemArms", Name: "UnderBedBondageCuffs" },
                { Group: "ItemArms", Name: "MedicalBedRestraints" },
                { Group: "ItemArms", Name: "HempRope", TypeRecord: { typed: 11 } },
                { Group: "ItemLegs", Name: "MedicalBedRestraints" },
                { Group: "ItemFeet", Name: "HempRope", TypeRecord: { typed: 6 } },
                { Group: "ItemFeet", Name: "MedicalBedRestraints" },
            ],
            Effect: [E.Mounted, E.OnBed],
            Layer: [{ Name: "骨架" }, { Name: "床垫" }, { Name: "枕头" }],
        },
    ],
};

/** @type {Translation.GroupedEntries} */
const translations = {
    CN: {
        ItemAddon: {
            被子左边_Luzi: "被子左边",
            被子右边_Luzi: "被子右边",
        },
        ItemDevices: {
            床左边_Luzi: "床左边",
            床右边_Luzi: "床右边",
        },
    },
    EN: {
        ItemAddon: {
            被子左边_Luzi: "Left Side of Quilt",
            被子右边_Luzi: "Right Side of Quilt",
        },
        ItemDevices: {
            床左边_Luzi: "Left Side of Bed",
            床右边_Luzi: "Right Side of Bed",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
    ModManager.progressiveHook("DrawCharacter", 1)
        .inside("ChatRoomCharacterViewLoopCharacters")
        .inject((args, next) => {
            const [C, X, Y, Zoom] = args;
            const pair = ChatRoomOrder.requirePairDrawState(C);

            if (!pair) return;

            const centerX = (pair.prev.drawState.X + pair.next.drawState.X) / 2;

            if (
                pair.prev.C.MemberNumber === C.MemberNumber &&
                InventoryIsItemInList(C, "ItemDevices", ["床左边_Luzi"])
            ) {
                args[1] = centerX - 100 * Zoom;
                return;
            }
            if (
                pair.next.C.MemberNumber === C.MemberNumber &&
                InventoryIsItemInList(C, "ItemDevices", ["床右边_Luzi"])
            ) {
                args[1] = centerX + 100 * Zoom;
                return;
            }
        });
}
