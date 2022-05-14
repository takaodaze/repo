import { useRecoilState } from "recoil";
import { workInputValueState } from "../../store/workInputValue";

export const MemoInput = () => {
    const [{ memo }, setWorkInputValue] = useRecoilState(workInputValueState);

    const setMemo = (memo: string) => {
        setWorkInputValue((prev) => ({ ...prev, memo }));
    };

    return (
        <input
            className="h-full grow rounded-lg border-2 p-3 outline-none"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="学習内容やメモしたいこと"
        />
    );
};
