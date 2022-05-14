import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { workInputValueState } from "../../store/workInputValue";
import { calcWorkDuration, WorkDuration } from "../../util/WorkDuration";

const incrementHourStep = 1;
const incrementMinuteStep = 15;

export const useWorkDurationInput = () => {
    const [{ workDuration }, setWorkInputValue] =
        useRecoilState(workInputValueState);

    const setWorkDuration = (w: WorkDuration) => {
        setWorkInputValue((prev) => ({ ...prev, workDuration: w }));
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
    };
};
