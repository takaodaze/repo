import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Subject } from "../../store/user";
import { DeleteSubjectModal } from "./DeleteSubjectModal";
import { EditSubjectModal } from "./EditSubjectModal";
import { SubjectIcon } from "./SubjectIcon";

type Props = {
    subject: Subject;
    onClick?: () => void;
};

export const SubjectCard = (props: Props) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [isDeleteMode, setIsDeleteMode] = useState(false);

    return (
        <div
            onClick={props.onClick}
            className="flex cursor-pointer items-center justify-between space-x-2 rounded-lg bg-white p-4 shadow-md dark:bg-slate-700"
        >
            <div className="h-10 w-10 shrink-0">
                <SubjectIcon colorCode={props.subject.colorCode} />
            </div>
            <div className="font-bold">{props.subject.name}</div>
            <div className="flex gap-2">
                <AiOutlineEdit
                    size={25}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsEditMode(true);
                    }}
                />
                <AiOutlineDelete
                    size={25}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsDeleteMode(true);
                    }}
                />
            </div>
            {isEditMode && (
                <EditSubjectModal
                    subjectId={props.subject.id}
                    onClose={() => setIsEditMode(false)}
                />
            )}

            {isDeleteMode && (
                <DeleteSubjectModal
                    subjectId={props.subject.id}
                    onClose={() => setIsDeleteMode(false)}
                />
            )}
        </div>
    );
};
