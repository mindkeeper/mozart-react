/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green-500": "#58FFB8",
        "primary-green-400": "#79FFC6",
        "primary-green-300": "#A7FFD9",
        "primary-yellow": "#FCFE5B",
        "primary-black": "#1C1C1C",
      },
    },
  },
  plugins: [],
};
