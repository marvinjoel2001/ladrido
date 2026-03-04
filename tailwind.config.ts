import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#a855f7",
        secondary: "#f97316",
        "background-light": "#f7f5f8",
        "background-dark": "#0f0817",
        glass: "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
