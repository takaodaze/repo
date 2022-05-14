import { useRecoilState } from "recoil";
import { loginAtom } from "../store/login";
import { zIndex } from "../zIndex";
import { GoogleLoginButton } from "./GoogleLoginButton";

export const LoginScreen = () => {
    const [loginState] = useRecoilState(loginAtom);

    if (loginState) {
        return null;
    }

    return (
        <div
            className="flex h-screen w-screen items-center justify-center bg-gray-300"
            style={{ zIndex: zIndex.LoginModal }}
        >
            <div className="rounded-lg bg-white p-5 shadow-lg">
                <div className="flex h-full w-full flex-col items-center justify-center space-y-4 p-2">
                    <div className="text-center text-lg font-bold">📜 Repo</div>
                    <div className="text-center text-lg font-bold">
                        Who are you?
                    </div>
                    <GoogleLoginButton />
                </div>
            </div>
        </div>
    );
};
