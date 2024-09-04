"use client";

import { useEffect, useState } from "react";

export default function ThemeButtonGroup() {
    const [theme, setTheme] = useState(window.localStorage.getItem("theme"));

    useEffect(() => {
        const storedTheme = window.localStorage.getItem("theme");
        const prefersDarkMode = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;

        const newTheme =
            theme || storedTheme || (prefersDarkMode ? "dark" : "light");

        // Set theme based on stored value or user preference if theme is not already set
        if (!theme) {
            setTheme(newTheme);
        }

        // Apply the theme to the document

        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(newTheme);
        window.localStorage.setItem("theme", newTheme);
    }, [theme]);

    const setLightTheme = () => {
        setTheme("light");
    };
    const setDarkTheme = () => {
        setTheme("dark");
    };
    return (
        <div className="flex gap-3 border px-2 py-2 rounded-full">
            <button
                className="bg-black/10 p-2 rounded-full"
                onClick={setLightTheme}
            >
                <svg
                    data-testid="geist-icon"
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                    className="w-6 h-6"
                >
                    <circle cx="12" cy="12" r="5"></circle>
                    <path d="M12 1v2"></path>
                    <path d="M12 21v2"></path>
                    <path d="M4.22 4.22l1.42 1.42"></path>
                    <path d="M18.36 18.36l1.42 1.42"></path>
                    <path d="M1 12h2"></path>
                    <path d="M21 12h2"></path>
                    <path d="M4.22 19.78l1.42-1.42"></path>
                    <path d="M18.36 5.64l1.42-1.42"></path>
                </svg>
            </button>
            <button
                className={`${
                    theme == "dark" ? "bg-white/20" : ""
                } p-2 rounded-full`}
                onClick={setDarkTheme}
            >
                <svg
                    data-testid="geist-icon"
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                    className="w-6 h-6"
                >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
            </button>
        </div>
    );
}
