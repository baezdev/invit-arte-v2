/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#a259ff",
        secon: "#ffc700",
        third: "#ec4899",
      },
      keyframes: {
        dance: {
          "0%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
          "100%": { transform: "rotate(-8deg)" },
        },
      },
      animation: {
        dance: "dance .3s linear infinite",
      },
    },
  },
  plugins: [],
};
