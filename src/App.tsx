import { ErrorBoundary } from "./component/functional/ErrorBoundary";
import LearningInput from "./component/LearningInput";
import { SubjectList } from "./component/SubjectList";

export const App = () => {
    return (
        <div className="h-screen w-full">
            <div className="flex h-full flex-col justify-end p-3">
                <ErrorBoundary>
                    <LearningInput />
                </ErrorBoundary>
            </div>
        </div>
    );
};
