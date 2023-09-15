import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9f73e5",
        basegray: "#65676B",
        btngray: "#E4E6EB",
        bodybg: "#F0F0F0",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
