/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      small: "481px",
      medium: "501px",
      lg: "807px",
      x: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      body: ["Open Sans"],
    },
    extend: {
      colors: {
        background: "#444444",
        body: "#f9f8f8",
      },
    },
  },
  plugins: [],
};
