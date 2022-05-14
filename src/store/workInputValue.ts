import { atom } from "recoil";
import { WorkDuration } from "../util/WorkDuration";
import { Subject } from "./user";

export type WorkInputValue = {
    subject: Subject | null;
    memo: string;
    workDuration: WorkDuration;
};

export const workInputValueState = atom<WorkInputValue>({
    key: "workInputValueState",
    default: {
        subject: null,
        memo: "",
        workDuration: {
            hour: 0,
            minute: 0,
        },
    },
});
