import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { Subject } from "../../store/user";
import { EditSubjectModal } from "./EditSubjectModal";
import { SubjectIcon } from "./SubjectIcon";

type Props = {
    subject: Subject;
    onClick?: () => void;
};

export const SubjectCard = (props: Props) => {
    const [isEditMode, setIsEditMode] = useState(false);

    return (
        <div
            onClick={props.onClick}
            className="flex cursor-pointer items-center justify-between rounded-lg bg-white p-4 shadow-md"
        >
            <div className="h-10 w-10 shrink-0">
                <SubjectIcon colorCode={props.subject.colorCode} />
            </div>
            <div className="font-bold">{props.subject.name}</div>
            <AiOutlineEdit
                size={20}
                onClick={(e) => {
                    e.stopPropagation();
                    setIsEditMode(true);
                }}
            />
            {isEditMode && (
                <EditSubjectModal
                    subjectId={props.subject.id}
                    onClose={() => setIsEditMode(false)}
                />
            )}
        </div>
    );
};
