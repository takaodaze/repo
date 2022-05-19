import { MdSend } from "react-icons/md";
import { useRecoilState, useSetRecoilState } from "recoil";
import { firestoreClient } from "../../db/FireStoreClient";
import { workRecordIdHasBeenAddedNowState } from "../../store/app";
import { userState, WorkRecord } from "../../store/user";
import { workInputValueState } from "../../store/workInputValue";
import { convWorkDurationToMinute } from "../../util/WorkDuration";

export const RegisterButton = () => {
    const [workInputValue, setWorkInputValue] =
        useRecoilState(workInputValueState);

    const setNewRecordId = useSetRecoilState(workRecordIdHasBeenAddedNowState);
    const [user, setUser] = useRecoilState(userState);

    const handleButton = () => {
        const { subjectId, memo, workDuration } = workInputValue;
        if (subjectId == null) {
            window.alert("項目を選択してください");
            return;
        }
        if (convWorkDurationToMinute(workDuration) <= 0) {
            window.alert("時間を設定してください");
            return;
        }

        const now = new Date();
        setUser((user) => {
            const newUser = { ...user };

            const newWorkRecord: WorkRecord = {
                id: user.workRecordIdMemo,
                subjectId: subjectId,
                memo: memo,
                workDuration: workDuration,
                workAt: now,
            };

            newUser.workRecordIdMemo += 1;
            newUser.workRecordList = [...newUser.workRecordList, newWorkRecord];

            firestoreClient.saveUserDate(newUser);
            return newUser;
        });

        setNewRecordId(user.workRecordIdMemo);

        setWorkInputValue((prev) => ({
            ...prev,
            memo: "",
            workDuration: { hour: 0, minute: 0 },
        }));
    };

    return (
        <button
            onClick={handleButton}
            className="h-full rounded-lg bg-green-600 p-3"
        >
            <MdSend className="text-2xl text-white" />
        </button>
    );
};
