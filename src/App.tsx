import { ErrorBoundary } from "./component/functional/ErrorBoundary";
import { LearningInput } from "./component/LearningInput";
import { Loading } from "./component/Loading";
import { useInitLogin } from "./component/hooks/useInitLogin";
import { LoginModal } from "./component/LoginModal";

export const App = () => {
    useInitLogin();
    return (
        <div className="h-screen w-full">
            <ErrorBoundary>
                <Loading />
                <LoginModal />
                <div className="flex h-full flex-col justify-end p-3">
                    <LearningInput />
                </div>
            </ErrorBoundary>
        </div>
    );
};
