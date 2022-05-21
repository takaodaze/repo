import { MdOutlineSmartphone } from "react-icons/md";
import { CopyBoard } from "./CopyBoard";

export const DeviceSorryScreen = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="flex flex-col items-center gap-10">
                <MdOutlineSmartphone className="text-8xl" />
                <div>
                    <p className="text-center">
                        Repoはモバイルデバイスに対応できていません
                    </p>
                    <p className="text-center">PCからのご利用をお願いします</p>
                </div>
                <CopyBoard text={window.location.href} />
            </div>
        </div>
    );
};
