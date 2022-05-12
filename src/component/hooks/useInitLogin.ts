import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { firebaseClient } from "../../config/firebase";
import { loadingState } from "../../store/loading";
import { loginStatusState } from "../../store/loginStatus";

export const useInitLogin = () => {
    // 自動ログインに使おう
    const [, setLoadingState] = useRecoilState(loadingState);
    const [loginState, setLoginState] = useRecoilState(loginStatusState);

    useEffect(() => {
        setLoadingState({ active: true, message: "Loading..." });
    }, [setLoadingState]);

    useEffect(() => {
        firebaseClient.auth.onAuthStateChanged(
            (e) => {
                try {
                    setLoadingState({
                        active: true,
                        message: "Loading...",
                    });
                    if (e?.uid != null) {
                        setLoginState({ isLogin: true, user: { uid: e.uid } });
                    }
                } finally {
                    setLoadingState({ active: false, message: "" });
                }
            },
            (e) => {
                console.error("auth error", e);
            }
        );
    }, [setLoadingState, setLoginState]);

    return { loginState };
};
