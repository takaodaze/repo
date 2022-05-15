import { AiOutlineCalendar } from "react-icons/ai";
export const WorkAt = ({ workAt }: { workAt: Date }) => {
    const display = `${workAt.getFullYear()}年 ${
        workAt.getMonth() + 1
    }月 ${workAt.getDate()}日`;
    return (
        <div className="flex items-center gap-1">
            <AiOutlineCalendar />
            <div>{display}</div>
        </div>
    );
};
