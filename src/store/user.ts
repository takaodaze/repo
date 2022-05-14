import { atom } from "recoil";
import { ColorCode } from "../util/ColorCode";
import { WorkDuration } from "../util/WorkDuration";

export type Subject = {
    id: number;
    name: string;
    colorCode: ColorCode;
};

export type WorkRecord = {
    id: number;
    memo: string;
    subjectId: number;
    workDuration: WorkDuration;
    workAt: Date;
};

export type User = {
    uid: string;
    subjectList: Subject[];
    subjectIdMemo: number;
    workRecordList: WorkRecord[];
};

export const userState = atom<User>({
    key: "userState",
    default: {
        uid: "",
        subjectList: [],
        workRecordList: [],
        subjectIdMemo: 0,
    },
});
