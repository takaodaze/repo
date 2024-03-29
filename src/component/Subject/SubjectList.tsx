import { useRecoilState } from "recoil";
import { Subject, userState } from "../../store/user";
import { NewSubjectButton } from "./NewSubjectButton";
import { SubjectCard } from "./SubjectCard";

type P = {
    onClickCard: (sub: Subject) => () => void;
    onClose?: () => void;
};

export const SubjectList = (p: P) => {
    const [user] = useRecoilState(userState);

    return (
        <div>
            <div
                className="fixed top-0 left-0 h-screen w-screen"
                onClick={p.onClose}
            >
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className="fixed bottom-20 left-3 flex flex-col gap-2 rounded-md border-2 bg-gray-200 p-3 dark:border-slate-700 dark:bg-slate-800"
                >
                    {user?.subjectList?.map((s) => (
                        <SubjectCard
                            key={`subject_${s.id}`}
                            onClick={p.onClickCard(s)}
                            subject={s}
                        />
                    ))}
                    <NewSubjectButton />
                </div>
            </div>
        </div>
    );
};
