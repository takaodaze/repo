import { ChangeEvent, useState } from "react";
import { calcStudyDuration, StudyDuration } from "../../util/StudyDuration";

const defaultStudyDuration: StudyDuration = {
    hour: 0,
    minute: 0,
};

const incrementHourStep = 1;
const incrementMinuteStep = 15;

export const useStudyDurationInput = () => {
    const [studyDuration, setStudyDuration] = useState(defaultStudyDuration);

    const handleChange =
        (type: "hour" | "minute") => (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;

            if (value.length === 0) {
                if (type === "hour") {
                    setStudyDuration((prev) => ({ ...prev, hour: 0 }));
                } else if (type === "minute") {
                    setStudyDuration((prev) => ({ ...prev, minute: 0 }));
                }
                return;
            }

            const maybeInt = parseInt(value);
            if (isNaN(maybeInt) || maybeInt < 0 || 60 < maybeInt) {
                return;
            }

            if (type === "hour") {
                setStudyDuration((prev) => ({ ...prev, hour: maybeInt }));
            } else if (type === "minute") {
                setStudyDuration((prev) => ({ ...prev, minute: maybeInt }));
            }
        };

    const increment = (type: "hour" | "minute") => {
        if (type === "hour") {
            setStudyDuration((prev) =>
                calcStudyDuration(prev, { hour: incrementHourStep, minute: 0 })
            );
        } else if (type === "minute") {
            setStudyDuration((prev) =>
                calcStudyDuration(prev, {
                    hour: 0,
                    minute: incrementMinuteStep,
                })
            );
        }
    };

    const decrement = (type: "hour" | "minute") => {
        if (type === "hour") {
            setStudyDuration((prev) =>
                calcStudyDuration(prev, { hour: -incrementHourStep, minute: 0 })
            );
        } else if (type === "minute") {
            setStudyDuration((prev) =>
                calcStudyDuration(prev, {
                    hour: 0,
                    minute: -incrementMinuteStep,
                })
            );
        }
    };

    return {
        studyDuration,
        handleChange,
        increment,
        decrement,
    };
};
