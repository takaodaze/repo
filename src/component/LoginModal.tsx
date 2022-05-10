import { zIndex } from "../zIndex";
import { GoogleLoginButton } from "./GoogleLoginButton";

export const LoginModal = () => {
    return (
        <div
            className="absolute inset-y-1/3 inset-x-1/3 rounded-lg border-2 bg-white"
            style={{ zIndex: zIndex.LoginModal }}
        >
            <div className="flex h-full w-full flex-col items-center justify-center space-y-4 p-2">
                <div className="text-center text-lg font-bold">
                    📜 Repo にログイン
                </div>
                <GoogleLoginButton />
            </div>
        </div>
    );
};
