/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      lg: "807px",
    },
    fontFamily: {
      body: ["Open Sans"],
    },
    extend: {
      colors: {
        background: "#444444",
      },
    },
  },
  plugins: [],
};
