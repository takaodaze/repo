import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useRecoilState } from "recoil";
import { modeState } from "../store/mode";

export const DarkModeSwitch = () => {
    const [mode, setMode] = useRecoilState(modeState);

    const handleClick = () => {
        setMode((prev) => {
            if (prev === "dark") {
                return "light";
            } else if (prev === "light") {
                return "dark";
            }
        });
    };

    return (
        <div
            onClick={handleClick}
            className="absolute top-1 right-1 rounded-2xl border-2 bg-inherit bg-slate-50 p-2 text-4xl opacity-100 dark:border-slate-800 dark:bg-slate-900"
        >
            {mode === "dark" ? <MdDarkMode /> : <MdLightMode />}
        </div>
    );
};