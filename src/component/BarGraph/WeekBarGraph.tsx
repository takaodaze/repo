import { useMemo, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { userState } from "../../store/user";
import { RepoDate } from "../../util/RepoDate";
import { BarGraph } from "./BarGraph";
import { genCurrentRepoDate } from "./genCurrenRepoDate";
import "../../scroll.css";
import { classNameForScrollBar } from "../../scroll";

const CURRENT_BAR_GRAPH_RANGE = "CURRENT_BAR_GRAPH_RANGE";

export const WeekBarGraph = () => {
    const maybeRange = parseInt(
        localStorage.getItem(CURRENT_BAR_GRAPH_RANGE) ?? ""
    );
    const [{ workRecordList }] = useRecoilState(userState);
    const [range, setRange] = useState(isNaN(maybeRange) ? 7 : maybeRange);

    const currentWeek = useMemo(() => genCurrentRepoDate(range), [range]);
    return (
        <div
            className={`flex flex-col gap-2 overflow-x-scroll rounded-lg border-2 p-2 dark:border-slate-700 ${classNameForScrollBar}`}
        >
            <div className="font-bold">
                直近
                <input
                    type="text"
                    value={range}
                    className="mx-1 w-12 rounded-lg border bg-inherit px-2 text-center font-bold dark:border-slate-700"
                    onChange={(e) => {
                        const value = e.target.value;

                        if (value.length === 0) {
                            setRange(0);
                            return;
                        }

                        const maybeInt = parseInt(value);
                        if (isNaN(maybeInt)) {
                            return;
                        }
                        localStorage.setItem(
                            CURRENT_BAR_GRAPH_RANGE,
                            maybeInt.toString()
                        );
                        setRange(maybeInt);
                    }}
                />
                日の作業記録
            </div>
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
                                <div className="text-sm">{d.MMddDay()}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
