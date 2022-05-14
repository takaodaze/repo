import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { firebaseClient } from "../../config/firebase";
import { firestoreClient } from "../../db/FireStoreClient";
import { loadingState } from "../../store/loading";
import { loginState } from "../../store/login";
import { userState } from "../../store/user";

export const useInitLogin = () => {
    // 自動ログインに使おう
    const [, setLoading] = useRecoilState(loadingState);
    const [login, setLogin] = useRecoilState(loginState);
    const [, setUser] = useRecoilState(userState);

    useEffect(() => {
        setLoading({ active: true, message: "Loading..." });
    }, [setLoading]);

    useEffect(() => {
        firebaseClient.auth.onAuthStateChanged(
            async (e) => {
                try {
                    setLoading({
                        active: true,
                        message: "Loading...",
                    });
                    if (e?.uid == null) return;

                    // --- ログイン後の処理 ---
                    // レコードがみつからない場合は、新しく作る
                    await firestoreClient.ifNotExistsCreateNewUser(e.uid);
                    const userData = await firestoreClient.getUserData(e.uid);

                    setLogin(true);
                    setUser(userData);
                } finally {
                    setLoading({ active: false, message: "" });
                }
            },
            (e) => {
                console.error("auth error", e);
            }
        );
    }, [setLoading, setLogin, setUser]);

    return { loginState: login };
};
