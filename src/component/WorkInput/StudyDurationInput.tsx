import { ChangeEventHandler } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { fillZeroTwoNumber } from "../../util/StudyDuration";
import { useStudyDurationInput } from "../hooks/useStudyDurationInput";

export const StudyDurationInput = () => {
    const { studyDuration, handleChange, increment, decrement } =
        useStudyDurationInput();

    return (
        <div className="flex h-full space-x-2">
            <div className="flex">
                <IncrementalButton onClick={() => increment("hour")} />
                <TimeInput
                    value={studyDuration.hour}
                    type="h"
                    onChange={handleChange("hour")}
                />
                <DecrementalButton onClick={() => decrement("hour")} />
            </div>

            <div className="flex">
                <IncrementalButton onClick={() => increment("minute")} />
                <TimeInput
                    value={studyDuration.minute}
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
        className="h-full rounded-l-lg border-2 border-r-0 px-0.5"
    >
        <MdAdd />
    </button>
);

const DecrementalButton = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className="h-full rounded-r-lg border-2 border-l-0 px-0.5"
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
    <div className="flex items-center border-2 pl-1 pr-3">
        <input
            className="h-full w-6 text-right outline-none"
            onChange={onChange}
            value={type === "m" ? fillZeroTwoNumber(value) : value}
        />
        <div className="ml-1">{type}</div>
    </div>
);
