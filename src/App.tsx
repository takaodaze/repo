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
                <div
                    className="grid gap-2 p-4"
                    style={{
                        gridTemplateRows:
                            "calc(100vh  - 4rem - 2rem - 0.5rem) 4rem", // calc( 画面全体 - 2行目の高さ -  padding - gap )
                        gridTemplateColumns: "400px 1fr",
                    }}
                >
                    <div
                        className="overflow-y-scroll rounded-lg border-2 p-2"
                        style={{
                            gridRowStart: 1,
                            gridRowEnd: 2,
                            gridColumnStart: 1,
                            gridColumnEnd: 2,
                        }}
                    >
                        <WorkRecordList />
                    </div>
                    <div
                        className="overflow-y-scroll rounded-lg border-2 "
                        style={{
                            gridRowStart: 1,
                            gridRowEnd: 2,
                            gridColumnStart: 2,
                            gridColumnEnd: 3,
                        }}
                    ></div>
                    <div
                        style={{
                            gridRowStart: 2,
                            gridRowEnd: 3,
                            gridColumnStart: 1,
                            gridColumnEnd: 3,
                        }}
                    >
                        <WorkInput />
                    </div>
                </div>
            </ErrorBoundary>
        </div>
    );
};
