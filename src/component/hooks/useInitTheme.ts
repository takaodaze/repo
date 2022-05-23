import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../../store/theme";

export const useInitTheme = () => {
    const [theme, setTheme] = useRecoilState(themeState);

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, [setTheme]);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
            document.documentElement.style.background = "rgb(15, 23, 42)";
            localStorage.setItem("theme", "dark");
        } else if (theme === "light") {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            document.documentElement.style.background = "rgb(255, 255, 255)";
            localStorage.setItem("theme", "light");
        }
    }, [theme]);
};
