module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      xxl: "1320px",
    },
    extend: {
      colors: {
        "green": "#00C865",
        "greenHover": "#26d07c",
        "greenLight": "#CCF4E0",
        "customGray": "#222222",
        "grayLight": "#555555",
        "whiteGreen": "#f4f9f4",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#00C865",
              fontWeight: "400",
              textDecoration: "none",
              "&:hover": { color: "#26d07c", textDecoration: "underline" },
            },
            strong: {
              fontWeight: "500",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
