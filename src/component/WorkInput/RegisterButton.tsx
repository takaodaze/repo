import { MdSend } from "react-icons/md";
import { useRecoilState } from "recoil";
import { workInputValueState } from "../../store/workInputValue";

export const RegisterButton = () => {
    const [workInputValue] = useRecoilState(workInputValueState);
    const handleButton = () => {
        console.log("debug", workInputValue);
    };

    return (
        <button
            onClick={handleButton}
            className="h-full rounded-lg bg-green-600 p-3"
        >
            <MdSend className="text-2xl text-white" />
        </button>
    );
};
