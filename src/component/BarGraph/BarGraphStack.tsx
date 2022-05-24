import { useEffect, useState } from "react";
import { WorkRecord } from "../../store/user";
import { useGetSubjectById } from "../hooks/useGetSubjectById";
export type BarGraghType = "vertical" | "horizontal";
type Props = {
    type: BarGraghType;
    workRecord: WorkRecord;
    isTop?: boolean;
    isBottom?: boolean;
    animate?: boolean;
};
export const BarGraphStack = (props: Props) => {
    const [dynamicVolume, setDynamicVolume] = useState(0);
    const subject = useGetSubjectById(props.workRecord.subjectId);

    const sumWorkMinute =
        props.workRecord.workDuration.hour * 60 +
        props.workRecord.workDuration.minute;

    useEffect(() => {
        if (!props.animate) {
            return;
        }
        if (dynamicVolume <= sumWorkMinute) {
            window.setTimeout(() => {
                setDynamicVolume((p) => ++p);
            }, 20);
        }
    }, [dynamicVolume, sumWorkMinute, props.animate]);

    const volume = props.animate ? dynamicVolume : sumWorkMinute;

    return (
        <div
            className={`rounded-sm ${
                props.isTop
                    ? props.type === "vertical"
                        ? "rounded-t-md"
                        : "rounded-l-md"
                    : ""
            } ${
                props.isBottom
                    ? props.type === "vertical"
                        ? "rounded-b-md"
                        : "rounded-r-md"
                    : ""
            }`}
            style={{
                background: subject.colorCode.use(),
                height: props.type === "vertical" ? volume : "12px",
                width: props.type === "horizontal" ? volume : "12px",
            }}
        />
    );
};
