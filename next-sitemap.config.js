/** @type {import('next-sitemap').IConfig} */

const exclude = [
  "/demo",
  "/preview/**"
];

const NEXT_SSG_FILES = [
  "/*.json$",
  "/*_buildManifest.js$",
  "/*_middlewareManifest.js$",
  "/*_ssgManifest.js$",
  "/*.js$",
];

module.exports = {
  siteUrl: "https://www.la-chapelle-aux-filtzmeens.fr/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: NEXT_SSG_FILES,
      },
    ],
  },
  exclude,
};