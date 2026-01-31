"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        } else {
            setIsDark(true);
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:scale-110"
            aria-label="Toggle theme"
        >
            <Sun
                className={`w-5 h-5 absolute transition-all duration-300 ${isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100 text-yellow-500"
                    }`}
            />
            <Moon
                className={`w-5 h-5 absolute transition-all duration-300 ${isDark ? "opacity-100 rotate-0 scale-100 text-primary" : "opacity-0 -rotate-90 scale-0"
                    }`}
            />
        </button>
    );
}
