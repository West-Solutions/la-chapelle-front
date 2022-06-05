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
  ],
  theme: {
    extend: {
      colors : colors || {},
      boxShadow: {
        "normal": "3px 3px 6px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
