import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { firebaseClient } from "../config/firebase";
import { User } from "../store/loginStatus";

const TABLES = {
    USER: "user",
} as const;

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
        return snapshot.data() as User;
    }

    async ifNotExistsCreateNewUser(uid: User["uid"]) {
        const exists = await this.existsUserData(uid);
        // setDoc は ドキュメント全体が replace されてしまう
        if (!exists) {
            const user: User = {
                uid: uid,
                subjectList: [],
                workRecordList: [],
            };
            await setDoc(doc(firebaseClient.db, TABLES.USER, uid), user);
        }
    }

    async saveUserDate(user: User) {
        await updateDoc(doc(firebaseClient.db, TABLES.USER, user.uid), user);
    }
}

export const firestoreClient = new FirestoreClient();
