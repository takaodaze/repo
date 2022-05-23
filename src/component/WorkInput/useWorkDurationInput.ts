import { ChangeEvent, useEffect, useReducer } from "react";
import { useRecoilState } from "recoil";
import { workInputValueState } from "../../store/workInputValue";
import {
    calcWorkDuration,
    convMinuteToWorkDuration,
    WorkDuration,
} from "../../util/WorkDuration";
import { initWorkDurationTimerState, timerReducer } from "./timerReducer";

const incrementHourStep = 1;
const incrementMinuteStep = 15;

export const useWorkDurationInput = () => {
    const [{ workDuration }, setWorkInputValue] =
        useRecoilState(workInputValueState);

    const setWorkDuration = (w: WorkDuration) => {
        setWorkInputValue((prev) => ({ ...prev, workDuration: w }));
    };

    const [timerState, dispatch] = useReducer(
        timerReducer,
        initWorkDurationTimerState
    );

    useEffect(() => {
        let iId = -1;
        const { startAt, status } = timerState;
        if (status === "run" && startAt != null) {
            iId = window.setInterval(() => {
                console.log("running timer...");
                const diffMs = new Date().getTime() - startAt;
                const diffMinute = Math.floor(diffMs / 1000 / 60);
                const workDuration = convMinuteToWorkDuration(diffMinute);
                setWorkInputValue((prev) => ({ ...prev, workDuration }));
            }, 10000);
            console.log("set new inteval:", iId);
        }

        return () => {
            console.log("clear interval:", iId);
            window.clearInterval(iId);
        };
    }, [setWorkInputValue, timerState]);

    const handleTimerButton = () => {
        if (timerState.status === "stop") {
            dispatch("run");
        } else {
            dispatch("stop");
        }
    };

    const handleChange =
        (type: "hour" | "minute") => (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;

            if (value.length === 0) {
                if (type === "hour") {
                    setWorkDuration({ hour: 0, minute: workDuration.minute });
                } else if (type === "minute") {
                    setWorkDuration({ hour: workDuration.hour, minute: 0 });
                }
                return;
            }

            const maybeInt = parseInt(value);
            if (isNaN(maybeInt) || maybeInt < 0 || 60 < maybeInt) {
                return;
            }

            if (type === "hour") {
                setWorkDuration({
                    hour: maybeInt,
                    minute: workDuration.minute,
                });
            } else if (type === "minute") {
                setWorkDuration({ hour: workDuration.hour, minute: maybeInt });
            }
        };

    const increment = (type: "hour" | "minute") => {
        if (type === "hour") {
            setWorkInputValue((prev) => {
                const duration = calcWorkDuration(prev.workDuration, {
                    hour: incrementHourStep,
                    minute: 0,
                });
                return {
                    ...prev,
                    workDuration: duration,
                };
            });
        } else if (type === "minute") {
            setWorkInputValue((prev) => {
                const duration = calcWorkDuration(prev.workDuration, {
                    hour: 0,
                    minute: incrementMinuteStep,
                });
                return {
                    ...prev,
                    workDuration: duration,
                };
            });
        }
    };

    const decrement = (type: "hour" | "minute") => {
        if (type === "hour") {
            setWorkInputValue((prev) => {
                const duration = calcWorkDuration(prev.workDuration, {
                    hour: -incrementHourStep,
                    minute: 0,
                });
                return {
                    ...prev,
                    workDuration: duration,
                };
            });
        } else if (type === "minute") {
            setWorkInputValue((prev) => {
                const duration = calcWorkDuration(prev.workDuration, {
                    hour: 0,
                    minute: -incrementMinuteStep,
                });

                return {
                    ...prev,
                    workDuration: duration,
                };
            });
        }
    };

    return {
        workDuration,
        handleChange,
        increment,
        decrement,
        handleTimerButton,
        timerStatus: timerState.status,
    };
};
