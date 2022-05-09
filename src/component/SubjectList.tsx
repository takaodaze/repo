import { useRecoilState } from "recoil";
import { Subject, subjectListState } from "../store/subject";
import { SubjectCard } from "./SubjectCard";

type P = {
    onClickCard: (sub: Subject) => () => void;
};

export const SubjectList = (p: P) => {
    const [subjectList] = useRecoilState(subjectListState);

    return (
        <div
            className={`flex flex-col gap-2 rounded-md border-2 bg-gray-100 p-3`}
        >
            {subjectList.map((s) => (
                <SubjectCard
                    key={`subject_${s.id}`}
                    onClick={p.onClickCard(s)}
                    subject={s}
                />
            ))}
        </div>
    );
};
