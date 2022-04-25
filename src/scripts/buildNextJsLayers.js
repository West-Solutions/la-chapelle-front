const fs = require("fs");
const axios = require("axios");
const path = require("path");
require("dotenv").config();

const navigationsLayers  = ["ancestors", "parent", "siblings", "children"];

const fetchMainNavigationStruc = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${process.env.API_URL}/navigation/render/main-navigation/?type=tree`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });

const createTemplate = (filePath = "", item ) => {
  try {
    fs.writeFileSync(filePath, `export default {
  title: "${item.title}",
  path: "${item.path}",
  type: "${item.type}",
  pageId: ${item.related.id},
};`);
  } catch (error) {
    console.error(error);
  }
};

const isInternal = (item = {}) => item.type === "INTERNAL";
const hasRelated = (item = {}) => item.related && Object.keys(item.related).length > 0;
const isWrapper = (item = {}) => item.items && item.items.length > 0;
const isIndexedWrapper = (item = {}) => isWrapper(item) && item.type === "INTERNAL";

const buildNextJsLayers = (items, layer = navigationsLayers[0], parent= "",) => {
  const pagesDirectory = path.join(__dirname, "../../pages");
  return items.map(item => {
    console.group(`- ${item.title}`);
    const explosedPath = item.path.split("/");

    // In the case our page as children, we need to create a directory for it
    if (isWrapper(item)) {
      const dirPath =
        `${parent ? parent + "/" : ""}${explosedPath[explosedPath.length - 1]}`;
      if (!fs.existsSync(pagesDirectory + "/" + dirPath)) {
        console.log(`📂 Creating new page directory → ${dirPath}`);
        try {
          fs.mkdirSync(pagesDirectory + "/" + dirPath);
        } catch (error) {
          console.error(error);
        }
      }

      // If our page has content we need to create an index.js file
      if (isIndexedWrapper(item) && hasRelated(item)) {
        const indexPath = path.join(pagesDirectory, dirPath, "index.js");
        console.log(`📝 Creating index.js in → ${dirPath}`);
        createTemplate(indexPath, item);
      }

    // Otherwise we create a page file with the slugified name
    } else if (isInternal(item) && hasRelated(item)) {
      const filePath =
        path.join(`${parent ? parent + "/" : ""}${explosedPath[explosedPath.length - 1]}.js`);
      console.log(`📝 Creating page → ${filePath}`);
      createTemplate(path.join(pagesDirectory, filePath), item);
    }

    // If page has no children and no content, let's inform the user
    if (!isWrapper(item) && !hasRelated(item)) {
      console.log("❌ This page has no content and no content nore children. Ignoring...");
    }

    const newParent = `${parent ? parent + "/" : ""}${explosedPath[explosedPath.length - 1]}`;
    buildNextJsLayers(item.items, navigationsLayers[navigationsLayers.indexOf(layer) + 1], newParent);
    console.groupEnd();
  });
};

//------------
// MAIN
//------------
(() => {
  fetchMainNavigationStruc().then(navigation => {
    console.group(`------------------------------------
🔍 Building next.js layers...
------------------------------------`);
    buildNextJsLayers(navigation);
  });
  console.groupEnd();
})();
