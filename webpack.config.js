const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// module.exports = {
//   entry: {
//     index: './src/script/index.js'
//   },
//   output: {
//     path: path.resolve(__dirname, 'build/script'),
//     filename: '[name].js'
//   },
//   module: {
//     rules: [ // 模块规则(配置loader,解析器等选项)
//       {
//         test: /\.js$/,
//         include: [
//           path.resolve(__dirname, 'src/script')
//         ],
//         loader: 'babel-loader'
//       },
//       {
//         test: /\.less$/,
//         use: [{
//           loader: 'style-loader',
//         },
//         {
//           loader: 'css-loader',
//         }, {
//           loader: 'less-loader',
//         }]
//       }
//     ]
//   }
// };

const extractLess = new ExtractTextPlugin({
  filename: '../style/[name].css',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  entry: {
    // vendor: ['React', 'ReactDom'], //3.x
    index: './src/script/index.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          minChunks: 1
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, 'build/script'),
    filename: '[name].js'
  },
  module: {
    rules: [ // 模块规则(配置loader,解析器等选项)
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/script')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'less-loader'
          }],
          // use style-loader in development
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    extractLess,
    new UglifyJSPlugin()
    // new webpack.optimize.CommonsChunkPlugin({ //3.x
    //   name: ['vendor'],
    //   // filename: "vendor.js"
    // })
  ],
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDom'
  // }
};
