import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { firestoreClient } from "../../db/FireStoreClient";
import { userState } from "../../store/user";
import { ColorCode } from "../../util/ColorCode";

type Props = {
    subjectId: number;
    onClose: () => void;
};
export const EditSubjectModal = (props: Props) => {
    const [{ subjectList }, setUser] = useRecoilState(userState);
    const subject = subjectList.find((s) => s.id === props.subjectId);

    const [subjectName, setSubjectName] = useState(subject?.name ?? "");
    const [colorCode, setColorCode] = useState(subject?.colorCode?.use() ?? "");

    if (subject == null) {
        throw new Error("subject not found");
    }

    const handleEdit = () => {
        setUser((prev) => {
            const newUser = {
                ...prev,
                subjectList: prev.subjectList.map((s) =>
                    s.id === subject.id
                        ? {
                              ...s,
                              name: subjectName,
                              colorCode: new ColorCode(colorCode),
                          }
                        : s
                ),
            };
            firestoreClient.saveUserDate(newUser);
            return newUser;
        });
    };

    if (subject == null) return null;

    return (
        <div
            className="fixed top-0 left-0 flex h-screen w-screen cursor-default items-center justify-center"
            onClick={(e) => {
                e.stopPropagation();
                props.onClose();
            }}
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
                    <div className="text-lg font-bold">項目を編集</div>
                    <AiOutlineCloseCircle
                        onClick={props.onClose}
                        className="h-6 w-6 cursor-pointer text-inherit"
                    />
                </div>
                <form
                    className="flex w-full flex-col space-y-4"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        props.onClose();
                    }}
                >
                    <div className="flex w-full gap-2">
                        <input
                            type="color"
                            className="h-10 w-10 bg-inherit"
                            onChange={(e) => setColorCode(e.target.value)}
                            value={colorCode}
                        />
                        <input
                            type="text"
                            className="h-10 flex-grow rounded-lg border-2 p-2"
                            onChange={(e) => {
                                setSubjectName(e.target.value);
                            }}
                            value={subjectName}
                        />
                    </div>

                    <button
                        className={`rounded-full ${
                            subjectName.length === 0
                                ? "bg-gray-300"
                                : "bg-green-600"
                        } p-1 text-lg font-bold text-white`}
                        onClick={handleEdit}
                    >
                        編集
                    </button>
                </form>
            </div>
        </div>
    );
};
