import { useRecoilState } from "recoil";
import { loadingState } from "../store/loading";
import { zIndex } from "../zIndex";

export const LoadingScreen = () => {
    const [loading] = useRecoilState(loadingState);

    if (!loading.active) {
        return null;
    }

    return (
        <div
            style={{ zIndex: zIndex.Loading }}
            className="absolute top-0 left-0 flex h-screen w-screen items-center justify-center bg-gray-300 shadow-xl "
        >
            <div className="opacity-1 absolute flex items-center space-x-3 rounded-lg bg-white p-5 ">
                <div className="h-7 w-7 animate-spin rounded-full border-4 border-green-400 border-t-transparent" />
                <div className="font-bold">{loading.message}</div>
            </div>
        </div>
    );
};
