import { ErrorBoundary } from "./component/functional/ErrorBoundary";
import { SubjectList } from "./component/SubjectList";

export const App = () => {
    return (
        <div className="h-full w-full">
            <ErrorBoundary>
                <SubjectList />
            </ErrorBoundary>
            aaa
        </div>
    );
};
