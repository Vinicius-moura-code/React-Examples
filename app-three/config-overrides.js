//const { injectBabelPlugin } = require("react-app-rewired");

/* 
const rootImport = [
  "root-import",
  {
    rootPathPrefix: "~",
    rootPathSufix: "src",
  },
];

module.exports = (config) => injectBabelPlugin(rootImport, config);*/

const { override, addBabelPlugins } = require("customize-cra");

module.exports = override(
  ...addBabelPlugins([
    "babel-plugin-root-import",
    {
      rootPathPrefix: "~",
      rootPathSuffix: "src",
    },
  ])
);
