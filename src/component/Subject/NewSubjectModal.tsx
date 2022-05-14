import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
type Props = {
    onClose: () => void;
};
export const NewSubjectModal = (props: Props) => {
    const [colorCode, setColorCode] = useState("#000");

    return (
        <div
            className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center"
            onClick={props.onClose}
            style={{
                background: "rgba(0,0,0,0.1)",
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex w-96 flex-col space-y-4 rounded-lg bg-white p-4 pb-6"
            >
                <div className="flex items-center justify-between">
                    <div className="h-6 w-6" />
                    <div className="text-lg font-bold">新しい項目の登録</div>
                    <AiOutlineCloseCircle
                        onClick={props.onClose}
                        className="h-6 w-6 cursor-pointer text-inherit"
                    />
                </div>

                <div className="flex w-full items-center gap-2">
                    <input
                        type="color"
                        className="h-10 w-10 border-0 bg-inherit"
                        onChange={(e) => setColorCode(e.target.value)}
                        value={colorCode}
                    />
                    <input
                        type="text"
                        className="h-10 flex-grow rounded-lg border-2 p-2"
                    />
                </div>

                <button className="rounded-full bg-green-600 p-1 text-lg font-bold text-white">
                    登録
                </button>
            </div>
        </div>
    );
};
