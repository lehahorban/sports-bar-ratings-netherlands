/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",
    },
    container: {
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.25rem",
        md: "2rem",
        xl: "2rem",
      },
      center: true,
    },
    extend: {
      colors: {
        main: "#001f3f",
        orange: "#FF6600",
        accent: "#007400",
        white: "#FFFFFF",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
