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
        primary: "#363AFC",
        primary2: "#9f73e5",
        basegray: "#65676B",
        btngray: "#E4E6EB",
        bodybg: "#F0F0F0",
        danger: "#F24E1E",
        success: "#00A400",
        warning: "#FFD233",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
