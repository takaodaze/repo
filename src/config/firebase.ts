import { FirebaseError, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firestoreClient } from "../db/FireStoreClient";

const {
    VITE_FIREBASE_API_KEY,
    VITE_FIREBASE_AUTH_DOMAIN,
    VITE_FIREBASE_PROJECT_ID,
    VITE_FIREBASE_STORAGE_BUCKET,
    VITE_FIREBASE_MESSAGING_SENDER_ID,
    VITE_FIREBASE_APP_ID,
    VITE_FIREBASE_MEASUREMENT_ID,
} = import.meta.env;

const firebaseConfig = {
    apiKey: VITE_FIREBASE_API_KEY,
    authDomain: VITE_FIREBASE_AUTH_DOMAIN,
    projectId: VITE_FIREBASE_PROJECT_ID,
    storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: VITE_FIREBASE_APP_ID,
    measurementId: VITE_FIREBASE_MEASUREMENT_ID,
};

class FirebaseClient {
    private readonly app;
    private readonly analytics;
    private readonly googleAuthProvider;

    readonly auth;
    readonly db;

    constructor() {
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = getAuth(app);
        const googleAuthProvider = new GoogleAuthProvider();
        const db = getFirestore(app);

        this.app = app;
        this.analytics = analytics;
        this.auth = auth;
        this.googleAuthProvider = googleAuthProvider;
        this.db = db;
    }

    async signIn() {
        try {
            const result = await signInWithPopup(
                this.auth,
                this.googleAuthProvider
            );
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (credential == null) throw new Error("credential not found");

            const token = credential.accessToken;
            const user = result.user;

            console.log("token:", token);
            console.log("user:", user);

            await firestoreClient.ifNotExistsCreateNewUser(user.uid);
        } catch (error) {
            if (error instanceof FirebaseError) {
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                console.error("credential:", credential);
                console.error("firebaseError:", error);
            } else {
                console.error("unknown error:", error);
            }
        }
    }
}

export const firebaseClient = new FirebaseClient();
