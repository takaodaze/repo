import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { Mode, modeState } from "../../store/mode";
import { RepoDate } from "../../util/RepoDate";

export const calcHeatMaplevel = (minutes: number): HeatmapLevel => {
    if (minutes <= 0) {
        return 0;
    } else if (minutes < 60) {
        return 1;
    } else if (minutes < 120) {
        return 2;
    } else if (minutes < 180) {
        return 3;
    } else {
        return 4;
    }
};

const bg = (mode: Mode, workMinutes: number) => {
    const level = calcHeatMaplevel(workMinutes);
    if (mode === "dark") {
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
    workAt: RepoDate;
};
export const HeatmapCell = (props: Props) => {
    const [mode] = useRecoilState(modeState);
    const [hover, setHover] = useState(false);

    const handleClick = useCallback(() => {
        console.log(props.workAt.yyyyMMdd(), props.workMinutes);
    }, [props.workAt, props.workMinutes]);

    return (
        <div
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={handleClick}
            className={`relative h-4 w-4 rounded-sm`}
            style={{
                background: bg(mode, props.workMinutes),
                border: "rgba(27, 31, 35, 0.06)",
            }}
        >
            {hover && (
                <div className="absolute -top-8 z-50 flex w-40 items-center justify-center rounded-md bg-slate-400 px-2 py-1 text-sm text-white ">
                    {`${props.workAt.yyyyMMdd()}, ${Math.floor(
                        props.workMinutes / 60
                    )}h ${props.workMinutes % 60}m`}
                </div>
            )}
        </div>
    );
};
