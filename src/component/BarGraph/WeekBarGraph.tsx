import { useMemo } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { userState } from "../../store/user";
import { RepoDate } from "../../util/RepoDate";
import { BarGraph } from "./BarGraph";
import { genCurrentWeekRepoDate } from "./genCurrentWeekRepoDate";

export const WeekBarGraph = () => {
    const [{ workRecordList }] = useRecoilState(userState);
    const currentWeek = useMemo(() => genCurrentWeekRepoDate(), []);
    return (
        <div className="flex flex-col gap-2 rounded-lg  border-2 p-2 dark:border-slate-700">
            <div className="font-bold">直近7日の作業記録</div>
            <div className="flex items-end gap-5">
                {currentWeek.map((d, idx) => {
                    const dayWorkRecordList = workRecordList
                        .filter((w) => d.equals(RepoDate.fromDate(w.workAt)))
                        .sort(
                            (a, b) => b.workAt.getTime() - a.workAt.getTime()
                        );

                    return (
                        <div
                            key={`weekbar_${idx}`}
                            className="flex flex-col items-center gap-2"
                        >
                            <BarGraph
                                type="vertical"
                                workRecordList={dayWorkRecordList}
                            />
                            <div className="flex items-center gap-1 ">
                                <AiOutlineCalendar />
                                <div className="text-sm">{d.MMdd()}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
