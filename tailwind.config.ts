// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        display: ["var(--font-humane-vf)", "sans-serif"],
        body: ["var(--font-general-sans-variable)", "sans-serif"],
      },
      colors: {
        champagne: {
          light: "#f5e2ca",
          medium: "#ebd5bb",
          dark: "#ebd8c1",
          text: "#685551",
        },
        prussian: {
          light: "#345C7E",
          medium: "#1C3144",
          dark: "#162736",
        },
      },
    },
  },
  plugins: [],
};

export default config;
