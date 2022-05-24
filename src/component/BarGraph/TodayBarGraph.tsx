import { useMemo } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../store/user";
import { RepoDate } from "../../util/RepoDate";
import { convWorkDurationToMinute } from "../../util/WorkDuration";
import { Countup } from "../Countup";
import { BarGraph } from "./BarGraph";

export const TodayBarGraph = () => {
    const [{ workRecordList }] = useRecoilState(userState);

    const today = useMemo(() => RepoDate.today(), []);

    const todayWorkRecordList = workRecordList
        .filter((w) => today.equals(RepoDate.fromDate(w.workAt)))
        .sort((a, b) => b.workAt.getTime() - a.workAt.getTime());

    const totalWorkMinutes = todayWorkRecordList.reduce(
        (prev, curr) => prev + convWorkDurationToMinute(curr.workDuration),
        0
    );

    return (
        <div className="flex w-full items-end justify-between rounded-lg border-2 p-2 dark:border-slate-700">
            <div className="flex flex-col gap-2">
                <div className="font-bold">今日の作業記録</div>
                <BarGraph
                    workRecordList={todayWorkRecordList}
                    type="horizontal"
                    animate
                />
            </div>
            <div className="flex h-full items-end gap-2 pr-2 text-3xl font-bold">
                <div>
                    <Countup
                        num={Math.floor(totalWorkMinutes / 60)}
                        interval={300}
                    />
                    h
                </div>
                <div>
                    <Countup num={totalWorkMinutes % 60} interval={100} />m
                </div>
            </div>
        </div>
    );
};
