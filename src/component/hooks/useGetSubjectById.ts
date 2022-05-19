import { useRecoilState } from "recoil";
import { Subject, userState } from "../../store/user";

export class NotFoundSubjectError extends Error {
    constructor(msg: string) {
        super(msg);
    }
}

export const useGetSubjectById = (subjectId: Subject["id"]) => {
    const [{ subjectList }] = useRecoilState(userState);

    const subject = subjectList.find((sub) => sub.id === subjectId);

    if (subject == null) {
        throw new NotFoundSubjectError(
            `not found subject, subjectId:${subjectId}`
        );
    }

    return subject;
};
