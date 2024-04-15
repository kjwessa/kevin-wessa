/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Humane VF"', "sans-serif"],
        body: ['"GeneralSans Variable"', "sans-serif"],
        cool: ['"NewTitle Variable"', "sans-serif"],
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
