import { Subject } from "../../store/user";
import { SubjectIcon } from "../Subject/SubjectIcon";

export const SubjectPart = ({ subject }: { subject: Subject }) => {
    return (
        <div className="flex items-center gap-2">
            <div className="h-5 w-5 flex-shrink-0">
                <SubjectIcon colorCode={subject.colorCode} />
            </div>
            <div className="font-bold">{subject.name}</div>
        </div>
    );
};
