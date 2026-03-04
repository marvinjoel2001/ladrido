import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        primaryAlt: "#A855F7",
        accent: "#F59E0B",
        navy: "#1E40AF",
        "background-light": "#f7f5f8",
        "background-dark": "#191022",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
