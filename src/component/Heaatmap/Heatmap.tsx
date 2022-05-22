import { useMemo } from "react";
import { genCurrentYearRepoDate } from "./genCurrentYearRepoDate";
import { HeatmapCell } from "./HeatmapCell";
import { MonthListUtil } from "./MonthListUtil";
import "../../scroll.css";
import { classNameForScrollBar } from "../../scroll";

export const Heatmap = () => {
    const monthList = useMemo(
        () => new MonthListUtil(new Date().getMonth() + 1).listRollYear(),
        []
    );
    const currentYear = new Date().getFullYear();
    const repoDate365Array = useMemo(() => genCurrentYearRepoDate(), []);

    return (
        <div
            className={`overflow-x-scroll ${classNameForScrollBar} rounded-lg border-2 p-4 dark:border-slate-700`}
        >
            <div className="h-12" />
            <div className="relative grid w-fit grid-flow-col grid-rows-7 gap-0.5">
                <div className="absolute -top-12 flex w-full flex-col gap-1">
                    <div className="flex w-full justify-between text-sm font-bold">
                        <div>{currentYear - 1}年</div>
                        <div>{currentYear}年</div>
                    </div>
                    <div className="flex w-full justify-between px-3">
                        {monthList.map((m, idx) => (
                            <div
                                key={`${m}_${idx}`}
                                className="text-sm font-bold"
                            >
                                {m}
                            </div>
                        ))}
                    </div>
                </div>
                {repoDate365Array.map((r, idx) => (
                    <HeatmapCell
                        key={`heatmap_cell_${idx}`}
                        workMinutes={0}
                        workAt={r}
                    />
                ))}
            </div>
        </div>
    );
};
