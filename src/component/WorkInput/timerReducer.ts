import { Reducer } from "react";

export const initTimerState: WorkDurationTimerState = {
    startAt: null,
    status: "stop",
};

export type WorkDurationTimerStatus = "run" | "stop";

type WorkDurationTimerState = {
    status: WorkDurationTimerStatus;
    startAt: number | null;
};

type WorkDurationTimerAction = "run" | "stop";

export const timerReducer: Reducer<
    WorkDurationTimerState,
    WorkDurationTimerAction
> = (state, action) => {
    switch (action) {
        case "run":
            return { startAt: new Date().getTime(), status: "run" };
        case "stop":
            return { startAt: null, status: "stop" };
        default:
            return state;
    }
};
