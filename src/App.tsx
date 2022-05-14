import { ErrorBoundary } from "./component/functional/ErrorBoundary";
import { useInitLogin } from "./component/hooks/useInitLogin";
import { WorkInput } from "./component/WorkInput";
import { LoginScreen } from "./component/LoginScreen";

export const App = () => {
    useInitLogin();
    return (
        <div className="h-screen w-screen">
            <LoginScreen />
            <ErrorBoundary>
                <div className="flex h-full flex-col justify-end p-3">
                    <WorkInput />
                </div>
            </ErrorBoundary>
        </div>
    );
};
