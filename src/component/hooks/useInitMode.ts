import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { modeState } from "../../store/mode";

export const useInitMode = () => {
    const [mode, setMode] = useRecoilState(modeState);

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setMode("dark");
        } else {
            setMode("light");
        }
    }, [setMode]);

    useEffect(() => {
        if (mode === "dark") {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else if (mode === "light") {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
        }
    }, [mode]);
};
