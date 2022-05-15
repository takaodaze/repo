import { WorkDurationInput } from "./WorkDurationInput";
import { SubjectSelector } from "./SubjectSelector";
import { MemoInput } from "./MemoInput";
import { RegisterButton } from "./RegisterButton";

export const WorkInput = () => {
    return (
        <div className="flex h-16 items-center space-x-2 rounded-lg border-2 p-2">
            <SubjectSelector />
            <MemoInput />
            <WorkDurationInput />
            <RegisterButton />
        </div>
    );
};
