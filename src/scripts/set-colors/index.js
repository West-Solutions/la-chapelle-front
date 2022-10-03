const fs = require("fs");
require("dotenv").config();
const path = require("path");
const axios = require("axios");

const root = path.join(__dirname, "../../../");

const fetchColor = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${process.env.API_URL}/colors/?populate=*`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });

const writeColorJson = colors => {
  console.info("Writing colors.json...");
  try {
    fs.writeFileSync(
      path.join(root, "colors.json"),
      JSON.stringify(colors, null, 2)
    );
  } catch (error) {
    console.error(error.message);
  }
};


console.group("📦 Setting Colors");
fetchColor().then(colors => {
  const colorsObject = {};
  colors.data.forEach(({ attributes }) => {
    colorsObject[attributes.var] = attributes.hexa;
    colorsObject[`${attributes.var}-light`] = _shadeColor(attributes.hexa, 10);
  });
  writeColorJson(colorsObject);
  console.info("✅ Colors setted!");
  console.groupEnd();
}).catch(error => {
  console.error(error.message);
});
console.groupEnd();

/**
 * Use to get a lighter or darker color from a hex color
 * @param {String} color color in hex format
 * @param {Number} percent percent to lighten or darken the color
 * @returns modified color in hex format
 */
const _shadeColor = (color, percent) => {
  var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
};