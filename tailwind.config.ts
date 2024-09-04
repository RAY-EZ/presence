import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            gridTemplateColumns: {
                sm: "repeat(6, 9.625rem)", // 640
                md: "repeat(8, 8.24691rem)", // 768
                lg: "repeat(9, 11.3rem)", // 1024
                xl: "repeat(12, 10.6rem)", // 1280
                "2xl": "repeat(12, 12.8rem)", // 1536
            },
            gridTemplateRows: {
                sm: "4rem",
                md: "4rem",
                lg: "4rem",
                xl: "4rem",
                "2xl": "4rem",
            },
        },
        container: {
            center: true,
        },
        screens: {
            xm: { max: "639px" },
            ...defaultTheme.screens,
        },
    },
    plugins: [],
    darkMode: 'class'
};
export default config;
