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
  console.log("Writing colors.json...");
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
  });
  writeColorJson(colorsObject);
  console.log("✅ Colors setted!");
  console.groupEnd();
}).catch(error => {
  console.error(error.message);
});
console.groupEnd();
