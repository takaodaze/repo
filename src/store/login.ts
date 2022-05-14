import { atom } from "recoil";

export const loginAtom = atom<boolean>({
    key: "loginAtom",
    default: true,
});
