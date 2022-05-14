import { useState } from "react";
import { NewSubjectModal } from "./NewSubjectModal";

export const NewSubjectButton = () => {
    const [enableModal, setEnableModal] = useState(false);

    return (
        <div>
            <div
                className="flex cursor-pointer justify-between rounded-full bg-white py-2 px-4 font-bold shadow-md"
                onClick={() => {
                    setEnableModal(true);
                }}
            >
                <div>+</div>
                <div>新しい項目を登録する</div>
                <div> </div>
            </div>
            {enableModal && (
                <NewSubjectModal onClose={() => setEnableModal(false)} />
            )}
        </div>
    );
};
