import { useRecoilState } from "recoil";
import { loadingState } from "../store/loading";

export const Loading = () => {
    const [state] = useRecoilState(loadingState);

    return <>{state.active && <div>Loading</div>}</>;
};
