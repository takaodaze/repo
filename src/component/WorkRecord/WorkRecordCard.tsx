import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { workRecordIdHasBeenAddedNowState } from "../../store/app";
import { userState, WorkRecord } from "../../store/user";
import { DeleteWorkRecordModal } from "./DeleteWorkRecordModal";
import { EditWorkRecordModal } from "./EditWorkRecordModal";
import { WorkRecordContent } from "./WorkRecordContent";

type Props = {
    workRecord: WorkRecord;
};

const equalsToWorkRecord = (a: WorkRecord, b: WorkRecord) => {
    if (
        a.id === b.id &&
        a.memo === b.memo &&
        a.subjectId === b.subjectId &&
        a.workAt.getTime() === b.workAt.getTime() &&
        a.workDuration.hour === b.workDuration.hour &&
        a.workDuration.minute === b.workDuration.minute
    ) {
        return true;
    } else {
        return false;
    }
};

export const WorkRecordCard = (props: Props) => {
    const [{ subjectList }] = useRecoilState(userState);
    const [newWorkRecordId] = useRecoilState(workRecordIdHasBeenAddedNowState);
    const [enableDeleteModal, setEnableDeleteModal] = useState(false);
    const [enableEditModal, setEnableEditModal] = useState(false);

    // state for animation
    const [firstPropsWorkRecord] = useState(props.workRecord);
    const [isNewWorkRecord, setIsNewWorkRecord] = useState<boolean>(false);
    const [updateNow, setUpdateNow] = useState<boolean>(false);

    const subject = subjectList.find(
        (s) => s.id === props.workRecord.subjectId
    );

    useEffect(() => {
        if (!equalsToWorkRecord(props.workRecord, firstPropsWorkRecord)) {
            // animate update work record
            setUpdateNow(true);
            setTimeout(() => {
                setUpdateNow(false);
            }, 2000);
        }
    }, [firstPropsWorkRecord, props.workRecord]);

    useEffect(() => {
        if (props.workRecord.id === newWorkRecordId) {
            // animate new work record
            setIsNewWorkRecord(true);
            setTimeout(() => {
                setIsNewWorkRecord(false);
            }, 2000);
        }
    }, [newWorkRecordId, props.workRecord.id]);

    if (subject == null) {
        throw new Error("subject not found");
    }

    return (
        <div className={`flex rounded-lg border-2 p-3 dark:border-slate-700`}>
            <WorkRecordContent
                subject={subject}
                workRecord={props.workRecord}
            />
            <div className="flex flex-col items-end justify-between">
                {updateNow || isNewWorkRecord ? (
                    <span className="h-4 w-4 animate-ping rounded-full bg-green-600" />
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
