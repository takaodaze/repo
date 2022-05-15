import { AiOutlineFileText } from "react-icons/ai";
import { Subject, WorkRecord } from "../../store/user";
import { SubjectPart } from "./SubjectPart";
import { WorkAt } from "./WorkAt";
import { WorkDurationPart } from "./WorkDurationPart";

export const WorkRecordContent = ({
    subject,
    workRecord,
}: {
    subject: Subject;
    workRecord: WorkRecord;
}) => {
    return (
        <div className="flex flex-grow flex-col gap-1 break-all ">
            <SubjectPart subject={subject} />
            <div className="flex gap-4">
                <WorkDurationPart workDuration={workRecord.workDuration} />
                <WorkAt workAt={workRecord.workAt} />
            </div>
            <div className="flex items-center gap-1">
                <AiOutlineFileText className="text-gray-500" />
                <div className="text-gray-500">{workRecord.memo}</div>
            </div>
        </div>
    );
};
