import { atom } from "recoil";
import { Subject } from "./subject";

export type User = {
    uid: string;
    subjectList: Subject[];
};

type LoginStatus = {
    isLogin: boolean;
    user: User | null;
};

export const loginStatusState = atom<LoginStatus>({
    key: "loginStatusState",
    default: {
        isLogin: false,
        user: null,
    },
});
