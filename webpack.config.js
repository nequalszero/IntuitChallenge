module.exports = {
  entry: "./src/entry.js",
  output: {
    filename: "./src/bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["",".js", ".jsx" ]
  }
};
