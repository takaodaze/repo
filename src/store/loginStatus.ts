import { atom } from "recoil";

type User = {
    uid: string;
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
