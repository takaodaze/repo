import { ErrorBoundary } from "./component/functional/ErrorBoundary";
import { useInitLogin } from "./component/hooks/useInitLogin";
import { WorkInput } from "./component/WorkInput";
import { LoginScreen } from "./component/LoginScreen";
import { WorkRecordList } from "./component/WorkRecord/WorkRecordList";
import { TodayBarGraph } from "./component/BarGraph/TodayBarGraph";
import { ReactNode } from "react";
import { WeekBarGraph } from "./component/BarGraph/WeekBarGraph";
import { useInitMode } from "./component/hooks/useInitMode";
import { DarkModeSwitch } from "./component/DarkModeSwitch";
import "./scroll.css";
import { classNameForScrollBar } from "./scroll";
import { DeviceSorryScreen } from "./component/DeviceSorryScreen";

export const App = () => {
    useInitLogin();
    useInitMode();

    if (window.outerWidth < 800) {
        return (
            <div className="dark:bg-slate-900 dark:text-gray-200">
                <DeviceSorryScreen />
            </div>
        );
    }

    return (
        <div className="dark:bg-slate-900 dark:text-gray-200">
            <LoginScreen />
            <ErrorBoundary>
                <DarkModeSwitch />
                <GridLayout>
                    <TopLeftLayout>
                        <WorkRecordList />
                    </TopLeftLayout>
                    <TopRightLayout>
                        <TodayBarGraph />
                        <div className="h-2" />
                        <WeekBarGraph />
                    </TopRightLayout>
                    <BottomLayout>
                        <WorkInput />
                    </BottomLayout>
                </GridLayout>
            </ErrorBoundary>
        </div>
    );
};

const GridLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div
            className="grid gap-2 p-4"
            style={{
                gridTemplateRows: "calc(100vh  - 4rem - 2rem - 0.5rem) 4rem", // calc( 画面全体 - 2行目の高さ -  padding - gap )
                gridTemplateColumns: "400px 1fr",
            }}
        >
            {children}
        </div>
    );
};

const TopLeftLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div
            className={`overflow-y-scroll rounded-lg border-2 p-2 dark:border-slate-700 ${classNameForScrollBar}`}
            style={{
                gridRowStart: 1,
                gridRowEnd: 2,
                gridColumnStart: 1,
                gridColumnEnd: 2,
            }}
        >
            {children}
        </div>
    );
};

const TopRightLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div
            className={`overflow-y-scroll rounded-lg ${classNameForScrollBar}`}
            style={{
                gridRowStart: 1,
                gridRowEnd: 2,
                gridColumnStart: 2,
                gridColumnEnd: 3,
            }}
        >
            {children}
        </div>
    );
};

const BottomLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div
            style={{
                gridRowStart: 2,
                gridRowEnd: 3,
                gridColumnStart: 1,
                gridColumnEnd: 3,
            }}
        >
            {children}
        </div>
    );
};
