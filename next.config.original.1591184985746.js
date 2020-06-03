const withCss = require("@zeit/next-css");
const withFonts = require("next-fonts");

module.exports = withFonts(

  withCss({
    target: "serverless",
  
    webpack: cfg => {
      cfg.module.rules.push({
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        options: { mode: ["react-component"] }
      });
      return cfg;
    },
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: "empty"
        };
      }
  
      return config;
    }
  })
);


 