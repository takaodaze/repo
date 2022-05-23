import { atom } from "recoil";

export type Theme = "dark" | "light" | undefined;

export const themeState = atom<Theme>({
    key: "themeState",
    default: undefined,
});
