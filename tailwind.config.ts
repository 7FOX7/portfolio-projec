import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': "#00ffa7", 
        'hover-color': "#02c280"
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        triangle: "triangle 4s cubic-bezier(0.645, 0.045, 0.355, 1) infinite alternate both running"
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        triangle: {
          "0%": {
            backgroundPositionX: "100%", 
          }, 
          "100%": {
            backgroundPositionX: "0%"
          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
