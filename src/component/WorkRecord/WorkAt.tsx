import { AiOutlineCalendar } from "react-icons/ai";
export const WorkAt = ({ workAt }: { workAt: Date }) => {
    const display = `${workAt.getFullYear()}/${workAt.getMonth()}/${workAt.getDate()}`;
    return (
        <div className="flex items-center gap-1">
            <AiOutlineCalendar />
            <div>{display}</div>
        </div>
    );
};
