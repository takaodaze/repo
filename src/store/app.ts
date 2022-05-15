import { atom } from "recoil";
import { WorkRecord } from "./user";

export const workRecordIdHasBeenAddedNowState = atom<WorkRecord["id"] | null>({
    key: "workRecordIdHasBeenAddedNowState",
    default: null,
});
