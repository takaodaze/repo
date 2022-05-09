import { FirebaseError, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
    private app;
    private analytics;
    auth;
    private googleAuthProvider;

    constructor() {
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = getAuth();
        const googleAuthProvider = new GoogleAuthProvider();

        this.app = app;
        this.analytics = analytics;
        this.auth = auth;
        this.googleAuthProvider = googleAuthProvider;
    }

    async signIn() {
        try {
            const result = await signInWithPopup(
                this.auth,
                this.googleAuthProvider
            );
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log("debug", token, user);
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
