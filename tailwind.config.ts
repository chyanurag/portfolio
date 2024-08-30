import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                one: '#1f2335',
                two: '#24283b',
                three: '#292e42',
                four: '#3b4261',
                five: '#414868',
                six: '#545c7e',
                seven: '#ff007c',
                eight: '#a9b1d6',
            }
        },
        dropShadow: {
            glow: [
                "0 0px 20px rgba(255,255, 255, 0.35)",
                "0 0px 65px rgba(255, 255,255, 0.2)"
            ]
        }

    },
    plugins: [],
};
export default config;
