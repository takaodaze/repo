import { useRecoilState } from "recoil";
import { userState } from "../../store/user";
import { fillZeroTwoNumber } from "../../util/WorkDuration";

export const WorkRecordList = () => {
    const [{ workRecordList }] = useRecoilState(userState);
    return (
        <div>
            {workRecordList?.map((w) => (
                <div key={`work_record_${w.id}`} className="flex gap-2">
                    <div>{w.subjectId}</div>
                    <div>{w.memo}</div>
                    <div>
                        {w.workDuration.hour}:
                        {fillZeroTwoNumber(w.workDuration.minute)}
                    </div>
                    <div>
                        {w.workAt.toDateString()} {w.workAt.toTimeString()}
                    </div>
                </div>
            ))}
        </div>
    );
};
