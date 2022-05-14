import { atom } from "recoil";
import { ColorCode } from "../util/ColorCode";

export type Subject = {
    id: number;
    name: string;
    colorCode: ColorCode;
};

export type User = {
    uid: string;
    subjectList: Subject[];
};

export const userState = atom<User>({
    key: "userState",
    default: {
        uid: "",
        subjectList: [],
    },
});
