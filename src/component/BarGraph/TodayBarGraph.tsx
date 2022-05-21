import { useMemo } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../store/user";
import { RepoDate } from "../../util/RepoDate";
import { BarGraph } from "./BarGraph";

export const TodayBarGraph = () => {
    const [{ workRecordList }] = useRecoilState(userState);

    const today = useMemo(() => RepoDate.today(), []);

    const todayWorkRecordList = workRecordList
        .filter((w) => today.equals(RepoDate.fromDate(w.workAt)))
        .sort((a, b) => b.workAt.getTime() - a.workAt.getTime());

    return (
        <div className="flex flex-col gap-2 rounded-lg border-2 p-2 dark:border-slate-700">
            <div className="font-bold">今日の作業記録</div>
            <BarGraph workRecordList={todayWorkRecordList} type="horizontal" />
        </div>
    );
};
