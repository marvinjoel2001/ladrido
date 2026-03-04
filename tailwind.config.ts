import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        primaryAlt: "#A855F7",
        accent: "#F59E0B",
        navy: "#1E40AF"
      }
    }
  },
  plugins: []
};

export default config;
