import { atom } from "recoil";

type Loading = {
    active: boolean;
    message: string;
};

export const loadingState = atom<Loading>({
    key: "loadingState",
    default: {
        active: true,
        message: "Loading...",
    },
});
