import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: "48px",
        h2: "32px",
        h3: "24px",
        normal: "16px",
        "h1-mobile": "30px",
        "h2-mobile": "24px",
        "h3-mobile": "20px",
        "normal-mobile": "16px",
      },
      colors: {
        blue: "#52599F",
        "light-brown": "#D3C4B7",
        white: "#DDD8CB",
        black: "#000000",
        red: "#B84C3F",
        orange: "#CC9232",
      },
    },
  },
  plugins: [],
};
export default config;