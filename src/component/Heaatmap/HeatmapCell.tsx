export type HeatmapLevel = 1 | 2 | 3;
type Props = {
    level: HeatmapLevel;
};
export const HeatmapCell = (props: Props) => {
    const bg = () => {
        switch (props.level) {
            case 1:
                return "bg-green-200";
            case 2:
                return "bg-green-300";
            case 3:
                return "bg-green-400";
        }
    };
    return <div className={`h-4 w-4 rounded-sm ${bg()}`} />;
};
