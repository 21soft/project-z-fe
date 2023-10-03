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
      },
      colors: {
        primary: "#6246EA",
      },
    },
  },
  plugins: [],
};
export default config;
