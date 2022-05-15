import { useRecoilState } from "recoil";
import { userState } from "../../store/user";
import { WorkRecordCard } from "./WorkRecordCard";

export const WorkRecordList = () => {
    const [{ workRecordList }] = useRecoilState(userState);
    return (
        <div className="flex flex-col gap-2">
            {workRecordList?.map((w) => (
                <WorkRecordCard workRecord={w} key={`work_record_${w.id}`} />
            ))}
        </div>
    );
};
