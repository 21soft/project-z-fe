import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
        "lexend-deca": ["Lexend Deca", "sans-serif"],
      },
      colors: {
        primary: "#6246EA",
        "gray-1": "#333",
        "gray-2": "#545454",
        "gray-3": "828282",
      },
    },
  },
  plugins: [],
};
export default config;
