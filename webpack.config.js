"use strict";

module.exports = {
  entry: "./src/entry.js",
  output: {
    filename: "./src/bundle.js"
  },
  module: {
    loaders: [
      // {
      //   test: /\.css$/,
      //   loader: "style-loader!css-loader"
      // },
      // {
      //   test: /\.css$/,
      //   loader: 'css-loader',
      //   query: {
      //     modules: true,
      //     localIdentName: '[name]__[local]___[hash:base64:5]'
      //   }
      // },
      {
        test: [/\.css?$/],
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(jpe?g|gif|png)$/,
        loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
      },
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", '.jsx', '*'],
  }
};


// module.exports = {
//   entry: "./src/entry.js",
//   output: {
//     filename: "./src/bundle.js"
//   },
//   module: {
//     loaders: [
//       {
//         test: [/\.jsx?$/, /\.js?$/],
//         exclude: /(node_modules)/,
//         loader: 'babel',
//         query: {
//           presets: ['es2015', 'react', 'stage-1']
//         }
//       }
//     ]
//   },
//   devtool: 'source-map',
//   resolve: {
//     extensions: ["",".js", ".jsx" ]
//   }
// };
