import { AiOutlineFileText } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { userState, WorkRecord } from "../../store/user";
import { SubjectPart } from "./SubjectPart";
import { WorkAt } from "./WorkAt";
import { WorkDurationPart } from "./WorkDurationPart";

type Props = {
    workRecord: WorkRecord;
};
export const WorkRecordCard = (props: Props) => {
    const [{ subjectList }] = useRecoilState(userState);
    const subject = subjectList.find(
        (s) => s.id === props.workRecord.subjectId
    );

    if (subject == null) {
        throw new Error("subject not found");
    }

    return (
        <div className="flex flex-col items-start gap-1 break-all rounded-lg border-2 p-3">
            <SubjectPart subject={subject} />
            <div className="flex gap-4">
                <WorkDurationPart
                    workDuration={props.workRecord.workDuration}
                />
                <WorkAt workAt={props.workRecord.workAt} />
            </div>
            <div className="flex items-center gap-1">
                <AiOutlineFileText className="text-gray-500" />
                <div className="text-gray-500">{props.workRecord.memo}</div>
            </div>
        </div>
    );
};
