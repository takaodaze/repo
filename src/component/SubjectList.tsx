import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { subjectListState } from "../store/subject";
import { ColorCode } from "../util/ColorCode";
import { SubjectCard } from "./SubjectCard";

export const SubjectList = () => {
    const [subjectList] = useRecoilState(subjectListState);
    useEffect(() => {
        new ColorCode("aaa");
    }, []);
    return (
        <div>
            {subjectList.map((s) => (
                <SubjectCard key={`subject_${s.id}`} subject={s} />
            ))}
        </div>
    );
};
