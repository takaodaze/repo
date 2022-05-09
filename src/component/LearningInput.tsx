import { StudyDurationInput } from "./StudyDurationInput";
import { SubjectSelector } from "./SubjectSelector";
import { MdSend } from "react-icons/md";

export default function LearningInput() {
    return (
        <div className="flex items-center space-x-2 rounded-lg border-2 p-2">
            <SubjectSelector />
            <input
                className="h-full grow rounded-lg border-2 p-3 outline-none"
                placeholder="学習内容やメモしたいこと"
            />
            <StudyDurationInput />
            <div className="w-2" />
            <button className="h-full rounded-lg bg-green-600 p-3">
                <MdSend className="text-2xl text-white" />
            </button>
        </div>
    );
}
