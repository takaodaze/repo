import { useRecoilState } from "recoil";
import { userState } from "../../store/user";
import { useCalcUpdateDate } from "../hooks/useCalcUpdateDate";
import { BarGraph } from "./BarGraph";

export const TodayBarGraph = () => {
    const [{ workRecordList }] = useRecoilState(userState);
    const { prevUpdateTiming, nextUpdateTiming } = useCalcUpdateDate();

    const todayWorkRecordList = workRecordList
        .filter((workRecord) => {
            const workAt = workRecord.workAt.getTime();
            return prevUpdateTiming.getTime() <= workAt &&
                workAt <= nextUpdateTiming.getTime()
                ? true
                : false;
        })
        .sort((a, b) => b.workAt.getTime() - a.workAt.getTime());

    return (
        <div className="flex flex-col gap-2 rounded-lg border-2 p-2">
            <div className="font-bold">今日の作業記録</div>
            <BarGraph workRecordList={todayWorkRecordList} type="horizontal" />
        </div>
    );
};
