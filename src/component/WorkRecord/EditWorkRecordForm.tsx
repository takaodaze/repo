import { useState } from "react";
import { AiOutlineCalendar, AiOutlineFileText } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { useRecoilState } from "recoil";
import { firestoreClient } from "../../db/FireStoreClient";
import { Subject, User, userState, WorkRecord } from "../../store/user";

const fmtDate = (date: Date) => {
    const yyyy = date.getFullYear();
    const month = date.getMonth() + 1;
    const MM = month < 10 ? `0${month}` : month;
    const date_ = date.getDate();
    const dd = date_ < 10 ? `0${date_}` : date_;
    const hours = date.getHours();
    const hh = hours < 10 ? `0${hours}` : hours;
    const minutes = date.getMinutes();
    const mm = minutes < 10 ? `0${minutes}` : minutes;

    const fmtString = `${yyyy}-${MM}-${dd}T${hh}:${mm}`;
    return fmtString;
};

type Props = {
    workRecord: WorkRecord;
    subject: Subject;
    onClose: () => void;
};

export const EditWorkRecordForm = (props: Props) => {
    const [, setUser] = useRecoilState(userState);

    const [duration, setDuration] = useState(props.workRecord.workDuration);
    const [workAt, setWorkAt] = useState(props.workRecord.workAt);

    const [memo, setMemo] = useState(props.workRecord.memo);

    if (props.subject.id !== props.workRecord.subjectId) {
        throw new Error("not equals work record and subject");
    }

    const handleEdit = () => {
        const newWorkRecord: WorkRecord = {
            ...props.workRecord,
            workDuration: duration,
            workAt: workAt,
            memo: memo,
        };
        setUser((prev) => {
            const newUser: User = {
                ...prev,
                workRecordList: prev.workRecordList.map((w) =>
                    w.id === props.workRecord.id ? newWorkRecord : w
                ),
            };
            firestoreClient.saveUserDate(newUser);
            return newUser;
        });
    };

    return (
        <form
            className="flex w-full flex-col space-y-4"
            onSubmit={async (e) => {
                e.preventDefault();
                handleEdit();
                props.onClose();
            }}
        >
            <div className="flex flex-col gap-2 px-10">
                <div className="flex items-center gap-1">
                    <GiSandsOfTime />
                    <input
                        className="w-10 rounded-lg border-2 p-1 text-center"
                        value={duration.hour}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value.length === 0) {
                                setDuration((prev) => ({
                                    hour: 0,
                                    minute: prev.minute,
                                }));
                                return;
                            }
                            const maybeInt = parseInt(value);
                            if (isNaN(maybeInt)) return;

                            setDuration((prev) => ({
                                hour: maybeInt,
                                minute: prev.minute,
                            }));
                        }}
                    />
                    h
                    <input
                        className="w-10 rounded-lg border-2 p-1 text-center"
                        value={duration.minute}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value.length === 0) {
                                setDuration((prev) => ({
                                    hour: prev.hour,
                                    minute: 0,
                                }));
                                return;
                            }
                            const maybeInt = parseInt(value);
                            if (isNaN(maybeInt)) return;

                            if (maybeInt >= 60) return;

                            setDuration((prev) => ({
                                hour: prev.hour,
                                minute: maybeInt,
                            }));
                        }}
                    />
                    m
                </div>
                <div className="flex items-center gap-1">
                    <AiOutlineCalendar />
                    <input
                        className="flex-grow rounded-lg border-2 p-1"
                        type="datetime-local"
                        value={fmtDate(workAt)}
                        onChange={(e) => {
                            const date = new Date(e.target.value);
                            setWorkAt(date);
                        }}
                    />
                </div>
                <div className="flex items-center gap-1">
                    <AiOutlineFileText />
                    <input
                        className="flex-grow rounded-lg border-2 p-1"
                        value={memo}
                        onChange={(e) => setMemo(e.target.value)}
                    />
                </div>
            </div>
            <button className="rounded-full bg-green-600 p-1 text-lg font-bold text-white">
                編集
            </button>
        </form>
    );
};
