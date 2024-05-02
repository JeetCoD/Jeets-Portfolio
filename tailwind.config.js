// Import the default theme object from Tailwind CSS
import defaultTheme from "tailwindcss/defaultTheme";

// Export the Tailwind CSS configuration
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "linear-btn1": "rgb(30, 43, 60) ",
        "linear-btn2": "rgb(10, 46, 90) ",
      },
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "border-spin": "border-spin 7s linear infinite",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
