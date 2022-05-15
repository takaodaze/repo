import { ErrorBoundary } from "./component/functional/ErrorBoundary";
import { useInitLogin } from "./component/hooks/useInitLogin";
import { WorkInput } from "./component/WorkInput";
import { LoginScreen } from "./component/LoginScreen";
import { WorkRecordList } from "./component/WorkRecord/WorkRecordList";

export const App = () => {
    useInitLogin();
    return (
        <div>
            <LoginScreen />
            <ErrorBoundary>
                <div className="flex flex-col p-3">
                    <WorkRecordList />
                    <WorkInput />
                </div>
            </ErrorBoundary>
        </div>
    );
};
