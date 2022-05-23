import { Reducer } from "react";

export const initWorkDurationTimerState: WorkDurationTimerState = {
    startAt: null,
    status: "stop",
};

type WorkDurationTimerState = {
    status: "run" | "stop";
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
