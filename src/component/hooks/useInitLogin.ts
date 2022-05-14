import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { firebaseClient } from "../../config/firebase";
import { firestoreClient } from "../../db/FireStoreClient";
import { loadingAtom } from "../../store/loading";
import { loginAtom } from "../../store/login";
import { userAtom } from "../../store/user";

export const useInitLogin = () => {
    // 自動ログインに使おう
    const [, setLoadingState] = useRecoilState(loadingAtom);
    const [loginState, setLoginState] = useRecoilState(loginAtom);
    const [, setUserState] = useRecoilState(userAtom);

    useEffect(() => {
        setLoadingState({ active: true, message: "Loading..." });
    }, [setLoadingState]);

    useEffect(() => {
        firebaseClient.auth.onAuthStateChanged(
            async (e) => {
                try {
                    setLoadingState({
                        active: true,
                        message: "Loading...",
                    });
                    if (e?.uid == null) return;

                    // --- ログイン後の処理 ---
                    // レコードがみつからない場合は、新しく作る
                    await firestoreClient.ifNotExistsCreateNewUser(e.uid);
                    const userData = await firestoreClient.getUserData(e.uid);

                    setLoginState(true);
                    setUserState(userData);
                } finally {
                    setLoadingState({ active: false, message: "" });
                }
            },
            (e) => {
                console.error("auth error", e);
            }
        );
    }, [setLoadingState, setLoginState, setUserState]);

    return { loginState };
};
