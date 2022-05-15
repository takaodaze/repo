import { AiOutlineCloseCircle } from "react-icons/ai";
import { Subject, WorkRecord } from "../../store/user";
import { EditWorkRecordForm } from "./EditWorkRecordForm";

type Props = {
    workRecord: WorkRecord;
    subject: Subject;
    onClose: () => void;
};
export const EditWorkRecordModal = (props: Props) => {
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
                    <div className="text-lg font-bold">記録を編集</div>
                    <AiOutlineCloseCircle
                        onClick={props.onClose}
                        className="h-6 w-6 cursor-pointer text-inherit"
                    />
                </div>

                <EditWorkRecordForm
                    workRecord={props.workRecord}
                    subject={props.subject}
                    onClose={props.onClose}
                />
            </div>
        </div>
    );
};
