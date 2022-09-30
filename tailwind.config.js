module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
        green: "#00C865",
        greenHover: "#26d07c",
        greenLight: "#CCF4E0",
        customGray: "#222222",
        grayLight: "#555555",
        whiteGreen: "#f4f9f4",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.green"),
              fontWeight: "400",
              textDecoration: "none",
              "&:hover": {
                color: theme("colors.green"),
                textDecoration: "underline",
              },
            },
            strong: {
              fontWeight: "500",
            },
            li: {
              "&::marker": {
                color: theme("colors.green"),
                fontWeight: "500",
              },
            },
          },
        },
      }),
      animation: {
        scale: "scale .8s ease-out",
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(0)" },
          "80%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: ["md:grid-cols-1", "md:grid-cols-2", "md:grid-cols-3"],
};
