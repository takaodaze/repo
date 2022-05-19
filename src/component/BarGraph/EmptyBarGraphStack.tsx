import { BarGraghType } from "./BarGraphStack";

type Props = {
    type: BarGraghType;
};
export const EmptyBarGraphStack = (props: Props) => {
    return (
        <div
            className={`rounded-sm ${
                props.type === "vertical" ? "rounded-t-md" : "rounded-l-md"
            } ${props.type === "vertical" ? "rounded-b-md" : "rounded-r-md"}
                border-2 border-dashed
            `}
            style={{
                height: props.type === "vertical" ? "60px" : "12px",
                width: props.type === "horizontal" ? "60px" : "12px",
            }}
        />
    );
};
