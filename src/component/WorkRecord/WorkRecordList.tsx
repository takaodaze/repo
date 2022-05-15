import { useRecoilState } from "recoil";
import { userState } from "../../store/user";
import { WorkRecordCard } from "./WorkRecordCard";

export const WorkRecordList = () => {
    const [{ workRecordList }] = useRecoilState(userState);
    const clonedWRList = [...workRecordList]; // for sorting

    return (
        <div className="flex flex-col gap-2">
            {clonedWRList
                ?.sort((a, b) => b.workAt.getTime() - a.workAt.getTime())
                ?.map((w) => (
                    <WorkRecordCard
                        workRecord={w}
                        key={`work_record_${w.id}`}
                    />
                ))}
        </div>
    );
};
