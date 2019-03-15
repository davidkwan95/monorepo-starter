const fs = require("fs");
const nodeExternals = require("webpack-node-externals");
const path = require("path");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    const babelRuleIndex = config.module.rules.findIndex(
      rule =>
        rule.use &&
        rule.use[0].loader &&
        rule.use[0].loader.includes("babel-loader")
    );
    config.module.rules[babelRuleIndex] = Object.assign(
      config.module.rules[babelRuleIndex],
      {
        include: [
          ...config.module.rules[babelRuleIndex].include,
          fs.realpathSync("../ui")
        ]
      }
    );

    config.externals =
      target === "node"
        ? [
            nodeExternals({
              whitelist: [
                dev ? "webpack/hot/poll?300" : null,
                /\.(eot|woff|woff2|ttf|otf)$/,
                /\.(svg|png|jpg|jpeg|gif|ico)$/,
                /\.(mp4|mp3|ogg|swf|webp)$/,
                /\.(css|scss|sass|sss|less)$/,
                /^@mono/
              ].filter(Boolean)
            })
          ]
        : [];

    return config;
  }
};
