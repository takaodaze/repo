import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { userState, WorkRecord } from "../../store/user";
import { DeleteWorkRecordModal } from "./DeleteWorkRecordModal";
import { EditWorkRecordModal } from "./EditWorkRecordModal";
import { WorkRecordContent } from "./WorkRecordContent";

type Props = {
    workRecord: WorkRecord;
};
export const WorkRecordCard = (props: Props) => {
    const [{ subjectList }] = useRecoilState(userState);
    const [enableDeleteModal, setEnableDeleteModal] = useState(false);
    const [enableEditModal, setEnableEditModal] = useState(false);

    const [isNewRecord, setIsNewRecord] = useState(false);

    const subject = subjectList.find(
        (s) => s.id === props.workRecord.subjectId
    );

    useEffect(() => {
        console.log("debug");
    }, []);

    useEffect(() => {
        setIsNewRecord(true);
        setTimeout(() => {
            setIsNewRecord(false);
        }, 2000);
    }, [props.workRecord]);

    if (subject == null) {
        throw new Error("subject not found");
    }

    return (
        <div className="flex rounded-lg border-2 p-3">
            <WorkRecordContent
                subject={subject}
                workRecord={props.workRecord}
            />
            <div className="flex flex-col items-end justify-between">
                {isNewRecord ? (
                    <span className="right-4 top-4 h-4 w-4 animate-ping rounded-lg bg-green-600" />
                ) : (
                    <div />
                )}
                <div className="flex items-end gap-3">
                    <AiOutlineEdit
                        className="cursor-pointer"
                        size={25}
                        onClick={(e) => {
                            e.stopPropagation();
                            setEnableEditModal(true);
                        }}
                    />
                    <AiOutlineDelete
                        className="cursor-pointer"
                        size={25}
                        onClick={(e) => {
                            e.stopPropagation();
                            setEnableDeleteModal(true);
                        }}
                    />
                </div>
            </div>
            {enableEditModal && (
                <EditWorkRecordModal
                    onClose={() => setEnableEditModal(false)}
                    subject={subject}
                    workRecord={props.workRecord}
                />
            )}
            {enableDeleteModal && (
                <DeleteWorkRecordModal
                    onClose={() => setEnableDeleteModal(false)}
                    subject={subject}
                    workRecord={props.workRecord}
                />
            )}
        </div>
    );
};
