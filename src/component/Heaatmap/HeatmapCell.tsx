import { useState } from "react";
import { useRecoilState } from "recoil";
import { Theme, themeState } from "../../store/theme";
import { RepoDate } from "../../util/RepoDate";

const h = 60;
export const convMinutesToHeatmapLevel = (minutes: number): HeatmapLevel => {
    if (minutes <= 0) {
        return 0;
    } else if (minutes < 1.5 * h) {
        return 1;
    } else if (minutes < 3 * h) {
        return 2;
    } else if (minutes < 4.5 * h) {
        return 3;
    } else {
        return 4;
    }
};

const calcHeatmapLevelColor = (theme: Theme, workMinutes: number) => {
    const level = convMinutesToHeatmapLevel(workMinutes);
    if (theme === "dark") {
        switch (level) {
            case 0:
                return "#30363d";
            case 1:
                return "#0e4429";
            case 2:
                return "#006d32";
            case 3:
                return "#26a641";
            case 4:
                return "#39d353";
        }
    } else {
        switch (level) {
            case 0:
                return "#ebedf0";
            case 1:
                return "#9be9a8";
            case 2:
                return "#40c463";
            case 3:
                return "#30a14e";
            case 4:
                return "#216e39";
        }
    }
};

export type HeatmapLevel = 0 | 1 | 2 | 3 | 4;
type Props = {
    workMinutes: number;
    idx: number;
    workAt: RepoDate;
};
export const HeatmapCell = (props: Props) => {
    const [theme] = useRecoilState(themeState);
    const [hover, setHover] = useState(false);

    const column = Math.floor(props.idx / 7);
    const hoverText =
        props.workAt.yyyyMMddDay() +
        ` ${Math.floor(props.workMinutes / 60)}h ${props.workMinutes % 60}m`;

    return (
        <div
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`relative h-4 w-4 rounded-sm`}
            style={{
                background: calcHeatmapLevelColor(theme, props.workMinutes),
                border: "rgba(27, 31, 35, 0.06)",
            }}
        >
            {hover && (
                <div
                    className={`absolute -top-8 z-50 flex w-44 items-center justify-center rounded-md bg-slate-400 px-2 py-1 text-center text-sm text-white`}
                    style={{ right: column > 25 ? 0 : undefined }}
                >
                    {hoverText}
                </div>
            )}
        </div>
    );
};
