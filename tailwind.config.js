/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // scan everything inside src/
  ],
  theme: {
    extend: {
        fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
       keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 50s linear infinite",
        scrollRight: "scrollRight 50s linear infinite",
      },
    },
  },
  plugins: [],
}
