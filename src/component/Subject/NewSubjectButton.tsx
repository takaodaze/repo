import { useState } from "react";
import { NewSubjectModal } from "./NewSubjectModal";

export const NewSubjectButton = () => {
    const [enableModal, setEnableModal] = useState(false);

    return (
        <div>
            <div
                className="flex cursor-pointer items-center justify-between space-x-3 rounded-full bg-white py-2 px-4 font-bold shadow-md dark:bg-slate-700"
                onClick={() => {
                    setEnableModal(true);
                }}
            >
                <div className="text-2xl">+</div>
                <div>新しい項目を登録する</div>
                <div className="text-2xl"></div>
            </div>
            {enableModal && (
                <NewSubjectModal onClose={() => setEnableModal(false)} />
            )}
        </div>
    );
};
