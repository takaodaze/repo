import { useMemo } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../store/user";
import { RepoDate } from "../../util/RepoDate";
import { BarGraph } from "./BarGraph";
import { genCurrentWeekRepoDate } from "./genCurrentWeekRepoDate";

export const WeekBarGraph = () => {
    const [{ workRecordList }] = useRecoilState(userState);
    const currentWeek = useMemo(() => genCurrentWeekRepoDate(), []);
    return (
        <div className="flex flex-col gap-2 rounded-lg  border-2 p-2">
            <div className="font-bold">直近7日の作業記録</div>
            <div className="flex items-end gap-4">
                {currentWeek.map((d, idx) => {
                    const dayWorkRecordList = workRecordList
                        .filter((w) => d.equals(RepoDate.fromDate(w.workAt)))
                        .sort(
                            (a, b) => b.workAt.getTime() - a.workAt.getTime()
                        );

                    return (
                        <BarGraph
                            key={`weekbar_${idx}`}
                            type="vertical"
                            workRecordList={dayWorkRecordList}
                        />
                    );
                })}
            </div>
        </div>
    );
};
