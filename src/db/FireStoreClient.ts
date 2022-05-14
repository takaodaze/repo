import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { firebaseClient } from "../config/firebase";
import { Subject, User, WorkRecord } from "../store/user";
import { ColorCode } from "../util/ColorCode";

const TABLES = {
    USER: "user",
} as const;

type SubjectData = {
    id: Subject["id"];
    name: string;
    colorCode: string;
};

type UserDoc = {
    uid: User["uid"];
    subjectList: SubjectData[];
    workRecordList: WorkRecord[];
};

const convUserDoc = (user: User): UserDoc => {
    const doc: UserDoc = {
        uid: user.uid,
        subjectList: user.subjectList.map((s) => ({
            id: s.id,
            name: s.name,
            colorCode: s.colorCode.use(),
        })),
        workRecordList: user.workRecordList,
    };
    return doc;
};

const convUser = (userDoc: UserDoc): User => {
    const user: User = {
        uid: userDoc.uid,
        subjectList: userDoc.subjectList.map((s) => ({
            id: s.id,
            name: s.name,
            colorCode: new ColorCode(s.colorCode),
        })),
        workRecordList: userDoc.workRecordList,
    };
    return user;
};

class FirestoreClient {
    private async existsUserData(uid: User["uid"]): Promise<boolean> {
        const snapshot = await getDoc(doc(firebaseClient.db, TABLES.USER, uid));
        return snapshot.exists();
    }

    async getUserData(uid: User["uid"]) {
        const snapshot = await getDoc(doc(firebaseClient.db, TABLES.USER, uid));
        if (!snapshot.exists()) {
            throw new Error("now found user!");
        }
        const userDoc: UserDoc = snapshot.data() as UserDoc;
        const user = convUser(userDoc);
        return user;
    }

    async ifNotExistsCreateNewUser(uid: User["uid"]) {
        const exists = await this.existsUserData(uid);
        // setDoc は ドキュメント全体が replace されてしまう
        if (!exists) {
            const user: UserDoc = {
                uid: uid,
                subjectList: [],
                workRecordList: [],
            };
            await setDoc(doc(firebaseClient.db, TABLES.USER, uid), user);
        }
    }

    async saveUserDate(user: User) {
        const userDoc: UserDoc = convUserDoc(user);
        await updateDoc(doc(firebaseClient.db, TABLES.USER, user.uid), userDoc);
    }
}

export const firestoreClient = new FirestoreClient();
