const defaultTheme = require("tailwindcss/defaultTheme");
const typography = require("@tailwindcss/typography");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      noto: ["Noto Serif", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#C1F651",
        black: "#02021D",
        steel: "#75869C",
        "white-smoke": "#F5F5F5",
        green: "#81D376",
        purple: "#A441EA",
        red: "#F14E2E",
        blue: "#3184FF",
        orange: "#FE7B1E",
        yellow: "#FFDA40",
        "orangy-yellow": "#FDF9E3",
        "yellowish-green": "#81D376",
        "grey-900": "#161F42",
        "grey-800": "#545C7C",
        "grey-700": "#767B92",
        "grey-600": "#999DAE",
        "grey-500": "#B7BAC9",
        "grey-400": "#D2D5DF",
        "grey-300": "#E3E5ED",
        "grey-200": "#EFF1F8",
        "grey-100": "#F8F9FD",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              "font-size": "72px",
              "line-height": "80px",
            },
            h2: {
              "font-size": "66px",
              "line-height": "74px",
            },
            h3: {
              "font-size": "56px",
              "line-height": "64px",
            },
            h4: {
              "font-size": "56px",
              "line-height": "48px",
            },
            h5: {
              "font-size": "46px",
              "line-height": "40px",
            },
            h6: {
              "font-size": "40px",
              "line-height": "36px",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
