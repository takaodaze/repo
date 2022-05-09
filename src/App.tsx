import { ErrorBoundary } from "./component/functional/ErrorBoundary";
import { LearningInput } from "./component/LearningInput";
import { LoginButton } from "./component/LoginButton";
import { firebaseClient } from "./config/firebase";

export const App = () => {
    // 自動ログインに使おう
    firebaseClient.auth.onAuthStateChanged((e) => {
        console.log(e);
    });
    return (
        <div className="h-screen w-full">
            <LoginButton />
            <div className="flex h-full flex-col justify-end p-3">
                <ErrorBoundary>
                    <LearningInput />
                </ErrorBoundary>
            </div>
        </div>
    );
};
