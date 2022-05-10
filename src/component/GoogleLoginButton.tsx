import { firebaseClient } from "../config/firebase";
import GoogleIconImage from "./google_icon.svg";

export const GoogleLoginButton = () => {
    const handleLogin = async () => {
        await firebaseClient.signIn();
    };
    return (
        <button
            className="flex items-center space-x-5 rounded-full border-2 py-3 px-4 shadow-sm"
            onClick={handleLogin}
        >
            <img src={GoogleIconImage} alt="google" className="w-7" />
            <div className="font-bold">Sign in with Google</div>
        </button>
    );
};
