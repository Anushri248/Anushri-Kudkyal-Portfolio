import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#2d6a4f",
        accent2: "#40916c",
        bg: "#ffffff",
        surface: "#f8f9fa",
        surface2: "#e9ecef",
        border: "#dee2e6",
        text: "#212529",
        muted: "#6c757d",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
