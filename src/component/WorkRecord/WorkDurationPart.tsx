import { WorkDuration } from "../../util/WorkDuration";
import { GiSandsOfTime } from "react-icons/gi";
import { fillZeroUnderTen } from "../../util/fillZero";

export const WorkDurationPart = ({
    workDuration,
}: {
    workDuration: WorkDuration;
}) => {
    return (
        <div className="flex items-center gap-1">
            <GiSandsOfTime />
            <div className="flex gap-1">
                <div>{workDuration.hour}h</div>
                <div>{fillZeroUnderTen(workDuration.minute)}m</div>
            </div>
        </div>
    );
};
