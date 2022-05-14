import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { firestoreClient } from "../../db/FireStoreClient";
import { userState } from "../../store/user";

type Props = {
    subjectId: number;
    onClose: () => void;
};
export const DeleteSubjectModal = (props: Props) => {
    const [{ subjectList }, setUser] = useRecoilState(userState);
    const subject = subjectList.find((s) => s.id === props.subjectId);

    if (subject == null) {
        throw new Error("subject not found");
    }

    const handleDelete = () => {
        setUser((prev) => {
            const newUser = {
                ...prev,
                subjectList: prev.subjectList.filter(
                    (s) => s.id !== subject.id
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
                    <div className="text-lg font-bold">項目を削除</div>
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
                    <button
                        className="rounded-full bg-red-600 p-1 text-lg font-bold text-white"
                        onClick={handleDelete}
                    >
                        削除
                    </button>
                </form>
            </div>
        </div>
    );
};
