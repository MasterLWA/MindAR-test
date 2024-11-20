module.exports = {
    mode: "development",
    devtool: false,
    module: {
      rules: [
        {
          test: /\.mjs$/,
          resolve: { fullySpecified: false },
          use: ["source-map-loader"],
          enforce: "pre",
          exclude: /node_modules/, // Exclude node_modules to ignore warnings from dependencies
        },
      ],
    },
  };
  