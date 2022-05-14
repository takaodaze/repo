import { Subject } from "../../store/user";
import { SubjectIcon } from "./SubjectIcon";

type Props = {
    subject: Subject;
    onClick?: () => void;
};

export const SubjectCard = (props: Props) => {
    return (
        <div
            onClick={props.onClick}
            className="flex cursor-pointer items-center gap-3 rounded-lg bg-white p-3 shadow-md"
        >
            <div className="h-10 w-10 shrink-0">
                <SubjectIcon colorCode={props.subject.colorCode} />
            </div>
            <div className=" font-bold">{props.subject.name}</div>
        </div>
    );
};
