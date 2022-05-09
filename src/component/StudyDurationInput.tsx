import { ChangeEvent, useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

type StudyDuration = {
    hour: number;
    minute: number;
};

const fillZeroTwoNumber = (n: number) => (n < 10 ? `0${n}` : n);

export const StudyDurationInput = () => {
    const [studyDuration, setStudyDuration] = useState<StudyDuration>({
        hour: 0,
        minute: 0,
    });

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
            if (isNaN(maybeInt)) {
                return;
            }
            if (maybeInt < 0 || 60 < maybeInt) {
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
            setStudyDuration((prev) => ({ ...prev, hour: prev.hour + 1 }));
        } else if (type === "minute") {
            setStudyDuration((prev) => {
                const step = 15;
                const nextMinute = step + prev.minute;
                if (nextMinute >= 60) {
                    return { hour: prev.hour + 1, minute: nextMinute - 60 };
                } else {
                    return { ...prev, minute: nextMinute };
                }
            });
        }
    };

    const decrement = (type: "hour" | "minute") => {
        if (type === "hour") {
            setStudyDuration((prev) => {
                const nextHour = prev.hour - 1;
                return { ...prev, hour: nextHour < 0 ? 0 : nextHour };
            });
        } else if (type === "minute") {
            setStudyDuration((prev) => {
                const step = -15;
                const nextMinute = step + prev.minute;
                if (nextMinute < 0) {
                    const nextHour = prev.hour - 1;
                    if (nextHour < 0) {
                        return { hour: 0, minute: 0 };
                    }
                    return { hour: nextHour, minute: nextMinute + 60 };
                } else {
                    return { ...prev, minute: nextMinute };
                }
            });
        }
    };

    return (
        <div className="flex h-full space-x-2">
            <div className="flex">
                <button
                    onClick={() => increment("hour")}
                    className="h-full rounded-l-lg border-2 border-r-0 px-2"
                >
                    <MdAdd />
                </button>
                <input
                    className={TIME_INPUT_CLASS_NAME}
                    value={studyDuration.hour}
                    onChange={handleChange("hour")}
                />
                <button
                    onClick={() => decrement("hour")}
                    className="h-full rounded-r-lg border-2 border-l-0 px-2"
                >
                    <MdRemove />
                </button>
            </div>

            <div className="flex">
                <button
                    onClick={() => increment("minute")}
                    className="h-full rounded-l-lg border-2 border-r-0 px-2"
                >
                    <MdAdd />
                </button>
                <input
                    className={TIME_INPUT_CLASS_NAME}
                    onChange={handleChange("minute")}
                    value={fillZeroTwoNumber(studyDuration.minute)}
                />
                <button
                    onClick={() => decrement("minute")}
                    className="h-full rounded-r-lg border-2 border-l-0 px-2"
                >
                    <MdRemove />
                </button>
            </div>
        </div>
    );
};

const TIME_INPUT_CLASS_NAME =
    "w-12 h-full outline-none border-2 text-center p-3";
