/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xxxs: "100px",
      xxs: "320px", // Custom even smaller breakpoint
      xs: "360px", // Custom extra small breakpoint
      sm: "640px",
      md: "768px",
      lg: "976px",
      customlg: "1228px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "j-yellow": "#FFD700",
        "j-blue": "#340089",
        "j-dark": "#1A202C",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
