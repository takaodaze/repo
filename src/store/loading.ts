import { atom } from "recoil";

type Loading = {
    active: boolean;
    message: string;
};

export const loadingAtom = atom<Loading>({
    key: "loadingAtom",
    default: {
        active: false,
        message: "",
    },
});
