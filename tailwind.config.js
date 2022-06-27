const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("./colors.json");

const safelistColors = () => {
  const safelist = [];
  Object.keys(colors).forEach(key => {
    safelist.push(
      `bg-${key}`,
      `text-${key}`,
      `fill-${key}`,
      `border-${key}`,
    );
  });
  return safelist;
};

module.exports = {
  content: [
    "./pages/**/*.js",
    "./src/components/**/*.js",
  ],
  safelist: [
    { pattern: /text-(left|right|center)/ },
    ...safelistColors(),
    "left-full",
    "right-full",
  ],
  theme: {
    extend: {
      colors : colors || {},
      boxShadow: {
        "normal": "3px 3px 6px rgba(0, 0, 0, 0.4)",
        "normal-right": "-3px 3px 6px rgba(0, 0, 0, 0.4)",
      },
      maxHeight: {
        "128": "32rem",
        "144": "36rem"
      },
      minHeight: {
        "16": "4rem",
        "80": "20rem",
      },
    },
    screens: {
      "xs": "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
