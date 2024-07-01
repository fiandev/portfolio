"use client";

import { useTheme } from "@/hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { randomID } from "@/utils/functions";

export default function ThemeToggler() {
    let [theme, changeTheme] = useTheme();

    // useEffect(() => {
    //     localStorage.setItem("theme", theme)
    //     console.log(`theme changed => ${theme}`);
    // }, [theme]);

    const handler = () => {
        let isDark = theme == "dark";
        changeTheme(isDark ? "light" : "dark");
    }

    return (
        <button
            onClick={handler}
            key={randomID()}
            className="w-6 h-6 flex items-center justify-center text-slate-800 dark:text-slate-200 hover:text-main"
        >
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
        </button>
    )
}