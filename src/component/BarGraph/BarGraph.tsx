import { FC } from "react";
import { WorkRecord } from "../../store/user";
import { BarGraghType, BarGraphStack } from "./BarGraphStack";
import { EmptyBarGraphStack } from "./EmptyBarGraphStack";

type Props = {
    type: BarGraghType;
    workRecordList: WorkRecord[];
    animate?: boolean;
};

export const BarGraph: FC<Props> = ({ animate, type, workRecordList }) => {
    if (workRecordList.length === 0) {
        return <EmptyBarGraphStack type={type} />;
    }
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
                    animate={animate}
                />
            ))}
        </div>
    );
};
