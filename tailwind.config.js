/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateAreas: {
        layout: ["navbar navbar", "sidebar main", "sidebar footer"],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
