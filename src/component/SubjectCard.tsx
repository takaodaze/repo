import { Subject } from "../store/subject";

type Props = {
    subject: Subject;
};
export const SubjectCard = (props: Props) => {
    return (
        <div className="flex border-8">
            <div>{props.subject.name}</div>
        </div>
    );
};
