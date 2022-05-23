import { ChangeEventHandler } from "react";
import {
    MdAdd,
    MdOutlineStopCircle,
    MdOutlineTimer,
    MdRemove,
} from "react-icons/md";
import { fillZeroUnderTen } from "../../util/fillZero";
import { WorkDurationTimerStatus } from "./timerReducer";
import { useWorkDurationInput } from "./useWorkDurationInput";

export const WorkDurationInput = () => {
    const {
        workDuration,
        handleChange,
        increment,
        decrement,
        handleTimerButton,
        timerStatus,
    } = useWorkDurationInput();

    return (
        <div className="flex h-full space-x-2">
            <Timer status={timerStatus} onClick={handleTimerButton} />
            <div className="flex">
                <IncrementalButton onClick={() => increment("hour")} />
                <TimeInput
                    value={workDuration.hour}
                    type="h"
                    onChange={handleChange("hour")}
                />
                <DecrementalButton onClick={() => decrement("hour")} />
            </div>

            <div className="flex">
                <IncrementalButton onClick={() => increment("minute")} />
                <TimeInput
                    value={workDuration.minute}
                    type="m"
                    onChange={handleChange("minute")}
                />
                <DecrementalButton onClick={() => decrement("minute")} />
            </div>
        </div>
    );
};

const IncrementalButton = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className="h-full rounded-l-lg border-2 border-r-0 px-0.5 dark:border-slate-700"
    >
        <MdAdd />
    </button>
);

const DecrementalButton = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className="h-full rounded-r-lg border-2 border-l-0 px-0.5 dark:border-slate-700"
    >
        <MdRemove />
    </button>
);

const TimeInput = ({
    onChange,
    value,
    type,
}: {
    onChange: ChangeEventHandler<HTMLInputElement>;
    value: number;
    type: "h" | "m";
}) => (
    <div className="flex items-center border-2 pl-1 pr-3 dark:border-slate-700">
        <input
            className="h-full w-6 bg-inherit text-right outline-none"
            onChange={onChange}
            value={type === "m" ? fillZeroUnderTen(value) : value}
        />
        <div className="ml-1">{type}</div>
    </div>
);

const Timer = ({
    onClick,
    status,
}: {
    onClick: () => void;
    status: WorkDurationTimerStatus;
}) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center rounded-xl border-2 p-2 text-xl dark:border-slate-700"
        >
            {status === "stop" ? <MdOutlineTimer /> : <MdOutlineStopCircle />}
        </button>
    );
};
