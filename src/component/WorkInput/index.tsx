import { WorkDurationInput } from "./WorkDurationInput";
import { SubjectSelector } from "./SubjectSelector";
import { MemoInput } from "./MemoInput";
import { RegisterButton } from "./RegisterButton";

export const WorkInput = () => {
    return (
        <div className="flex h-full items-center space-x-2 rounded-lg border-2 p-2 dark:border-slate-700">
            <SubjectSelector />
            <MemoInput />
            <WorkDurationInput />
            <RegisterButton />
        </div>
    );
};
