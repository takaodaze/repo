import { FC } from "react";
import { WorkRecord } from "../../store/user";
import { BarGraghType, BarGraphStack } from "./BarGraphStack";

type Props = { type: BarGraghType; workRecordList: WorkRecord[] };

export const BarGraph: FC<Props> = ({ type, workRecordList }) => {
    return (
        <div
            className={`flex ${type === "vertical" ? "flex-col" : ""}  gap-px`}
        >
            {workRecordList.map((workRecord, idx) => (
                <BarGraphStack
                    key={`today-stack-part-${idx}`}
                    isTop={idx === 0}
                    isBottom={idx === workRecordList.length - 1}
                    workRecord={workRecord}
                    type={type}
                />
            ))}
        </div>
    );
};
