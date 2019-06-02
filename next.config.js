const withTypescript = require("@zeit/next-typescript");
const rawLoader = require("raw-loader");

module.exports = withTypescript({
  webpack: config => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.gql$/i,
        use: "raw-loader"
      }
    ];
    return config;
  }
});
