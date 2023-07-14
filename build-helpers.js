module.exports = {
  sassRule: {
    test: /\.s[ac]ss$/,
    exclude: /\.module\.s[ac]ss$/,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  },

  sassModuleRule: {
    test: /\.module\.s[ac]ss$/,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: true,
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  },
};
