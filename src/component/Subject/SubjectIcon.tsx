import { ColorCode } from "../../util/ColorCode";

type Props = {
    colorCode: ColorCode;
};
export const SubjectIcon = (props: Props) => {
    return (
        <div
            className="h-full w-full rounded-full"
            style={{ backgroundColor: props.colorCode.use() }}
        />
    );
};
