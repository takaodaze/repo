import { WorkRecord } from "../../store/user";
import { useGetSubjectById } from "../hooks/useGetSubjectById";
export type BarGraghType = "vertical" | "horizontal";
type Props = {
    type: BarGraghType;
    workRecord: WorkRecord;
    isTop?: boolean;
    isBottom?: boolean;
};
export const BarGraphStack = (props: Props) => {
    const subject = useGetSubjectById(props.workRecord.subjectId);
    const sumWorkMinute =
        props.workRecord.workDuration.hour * 60 +
        props.workRecord.workDuration.minute;
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
                height: props.type === "vertical" ? sumWorkMinute : "12px",
                width: props.type === "horizontal" ? sumWorkMinute : "12px",
            }}
        />
    );
};
