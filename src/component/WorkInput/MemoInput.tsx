import { useRecoilState } from "recoil";
import { workInputValueState } from "../../store/workInputValue";

export const MemoInput = () => {
    const [{ memo }, setWorkInputValue] = useRecoilState(workInputValueState);

    const setMemo = (memo: string) => {
        setWorkInputValue((prev) => ({ ...prev, memo }));
    };

    return (
        <input
            className="h-full grow rounded-lg border-2 bg-inherit p-3 outline-none dark:border-slate-700"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="学習内容やメモしたいこと"
        />
    );
};
