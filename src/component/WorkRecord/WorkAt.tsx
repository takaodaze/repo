import { AiOutlineCalendar } from "react-icons/ai";
import { RepoDate } from "../../util/RepoDate";
export const WorkAt = ({ workAt }: { workAt: Date }) => {
    const repoDate = RepoDate.fromDate(workAt);
    return (
        <div className="flex items-center gap-1">
            <AiOutlineCalendar />
            <div>{repoDate.yyyyMMdd()}</div>
        </div>
    );
};
