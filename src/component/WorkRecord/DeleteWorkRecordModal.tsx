import { AiOutlineCloseCircle, AiOutlineFileText } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { firestoreClient } from "../../db/FireStoreClient";
import { Subject, User, userState, WorkRecord } from "../../store/user";
import { SubjectPart } from "./SubjectPart";
import { WorkAt } from "./WorkAt";
import { WorkDurationPart } from "./WorkDurationPart";

type Props = {
    workRecord: WorkRecord;
    subject: Subject;
    onClose: () => void;
};
export const DeleteWorkRecordModal = (props: Props) => {
    const [, setUser] = useRecoilState(userState);

    if (props.subject.id !== props.workRecord.subjectId) {
        throw new Error("not equals work record and subject");
    }

    const handleDelete = () => {
        setUser((prev) => {
            const newUser: User = {
                ...prev,

                workRecordList: prev.workRecordList.filter(
                    (w) => w.id !== props.workRecord.id
                ),
            };
            firestoreClient.saveUserDate(newUser);
            return newUser;
        });
    };

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
                className="flex w-96 flex-col items-center space-y-6 rounded-lg bg-white p-4 pb-6"
            >
                <div className="flex w-full items-center justify-between">
                    <div className="h-6 w-6" />
                    <div className="text-lg font-bold">記録を削除</div>
                    <AiOutlineCloseCircle
                        onClick={props.onClose}
                        className="h-6 w-6 cursor-pointer text-inherit"
                    />
                </div>

                <div className="flex flex-grow flex-col gap-1 break-all ">
                    <SubjectPart subject={props.subject} />
                    <div className="flex gap-4">
                        <WorkDurationPart
                            workDuration={props.workRecord.workDuration}
                        />
                        <WorkAt workAt={props.workRecord.workAt} />
                    </div>
                    <div className="flex items-center gap-1">
                        <AiOutlineFileText className="text-gray-500" />
                        <div className="text-gray-500">
                            {props.workRecord.memo}
                        </div>
                    </div>
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
