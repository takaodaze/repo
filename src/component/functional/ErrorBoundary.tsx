import React, { ErrorInfo, ReactNode } from "react";
import { MdErrorOutline } from "react-icons/md";

type Props = {
    children: ReactNode;
};

type State = {
    hasError: boolean;
    error: Error | null;
};

// https://ja.reactjs.org/docs/error-boundaries.html
// static getDerivedStateFromError() はエラーがスローされた後にフォールバック UI をレンダーするために使用します。
// componentDidCatch() はエラー情報をログに記録するために使用します。

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    public static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("componentDidCatch!!!");
        console.error("error:", error);
        console.error("errorInfo:", errorInfo);
    }

    public render() {
        const { hasError, error } = this.state;

        const { children } = this.props;
        return hasError ? (
            <div className="p-3">
                <div className="flex items-center gap-2 rounded-xl border-2 border-red-800 bg-red-200 py-4 px-5">
                    <MdErrorOutline size={20} className="text-red-800" />
                    <div className="font-bold text-red-800">
                        エラーが発生しました: {error?.message}
                    </div>
                </div>
            </div>
        ) : (
            children
        );
    }
}
