import { firebaseClient } from "../config/firebase";

export const LoginButton = () => {
    const handleLogin = async () => {
        await firebaseClient.signIn();
    };
    return (
        <button
            className="inline rounded-full border-2 py-3 px-4"
            onClick={handleLogin}
        >
            login with Google
        </button>
    );
};
