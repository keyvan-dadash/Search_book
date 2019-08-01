module.exports = {
  entry: {
    main: './app/index.js'
  },
  output:{
    path:"/Search_book/build/",
    filename:"bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer:{
    port:3000,
    contentBase:"./build",
    inline:true
  }
};
