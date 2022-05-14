import { ErrorBoundary } from "./component/functional/ErrorBoundary";
import { useInitLogin } from "./component/hooks/useInitLogin";
import { LearningInput } from "./component/WorkInput";
import { LoginScreen } from "./component/LoginScreen";

export const App = () => {
    const { loginState } = useInitLogin();

    if (!loginState.isLogin) return <LoginScreen />;

    return (
        <div className="h-screen w-screen">
            <ErrorBoundary>
                <div className="flex h-full flex-col justify-end p-3">
                    <LearningInput />
                </div>
            </ErrorBoundary>
        </div>
    );
};
