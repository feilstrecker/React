module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "page_[name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },
};
