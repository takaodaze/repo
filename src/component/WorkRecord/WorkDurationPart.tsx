import { fillZeroTwoNumber, WorkDuration } from "../../util/WorkDuration";

export const WorkDurationPart = ({
    workDuration,
}: {
    workDuration: WorkDuration;
}) => {
    return (
        <div className="flex gap-2">
            <div>{workDuration.hour}h</div>
            <div>{fillZeroTwoNumber(workDuration.minute)}m</div>
        </div>
    );
};
