import { atom } from "recoil";
import { WorkDuration } from "../util/WorkDuration";

export type WorkInputValue = {
    subjectId: number | null;
    memo: string;
    workDuration: WorkDuration;
};

export const workInputValueState = atom<WorkInputValue>({
    key: "workInputValueState",
    default: {
        subjectId: null,
        memo: "",
        workDuration: {
            hour: 0,
            minute: 0,
        },
    },
});
