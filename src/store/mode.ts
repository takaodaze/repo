import { atom } from "recoil";

export type Mode = "dark" | "light" | undefined;

export const modeState = atom<Mode>({
    key: "modeState",
    default: undefined,
});
