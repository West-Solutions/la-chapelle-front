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
    },
  },
  plugins: [],
};
