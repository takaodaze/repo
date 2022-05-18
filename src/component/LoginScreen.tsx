import { useRecoilState } from "recoil";
import { loginState } from "../store/login";
import { zIndex } from "../zIndex";
import { GoogleLoginButton } from "./GoogleLoginButton";

export const LoginScreen = () => {
    const [login] = useRecoilState(loginState);

    if (login) {
        return null;
    }

    return (
        <div
            className="fixed h-screen w-screen bg-gray-300"
            style={{ zIndex: zIndex.LoginModal }}
        >
            <div className="flex h-full w-full">
                <div className="m-auto rounded-lg bg-white p-5 shadow-lg">
                    <div className="flex flex-col items-center justify-center space-y-4 p-2">
                        <div className="text-center text-lg font-bold">
                            📜 Repo
                        </div>
                        <div className="text-center text-lg font-bold">
                            Who are you?
                        </div>
                        <GoogleLoginButton />
                    </div>
                </div>
            </div>
        </div>
    );
};
