const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

module.exports = {
  productionSourceMap: false,

  css: {
    sourceMap: IS_DEVELOPMENT,
  },

  pluginOptions: {
    svgSprite: {
      dir: "src/assets/icons",
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
        extract: false,
        spriteFilename: "img/icons.[hash:4].svg",
      },
      pluginOptions: {
        plainSprite: true,
      },
    },
  },

  chainWebpack: (config) => {
    config.module.rule("svg-sprite").use("svgo-loader").loader("svgo-loader");
  },
};
