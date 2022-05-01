const {
  cleanLayers,
  buildNextJsLayers,
  fetchMainNavigationStruc
} = require("./helpers");

//------------
// I - MAIN
//------------
(() => {
  fetchMainNavigationStruc().then(navigation => {
    console.group(
      "------------------------------------\n🔥 Cleaning previous layers\n------------------------------------");
    cleanLayers(navigation);
    console.groupEnd();
    console.group(
      "------------------------------------\n🔍 Building next.js layers...\n------------------------------------");
    buildNextJsLayers(navigation);
    console.groupEnd();
  });
})();
