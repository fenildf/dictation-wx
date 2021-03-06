const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'dva'],
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'wx app',
      template: './src/index.ejs'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          plugins: [
            ['dva-hmr'],
            ['add-module-exports'],
            ['transform-runtime'],
            ['import', { style: 'css', libraryName: 'antd-mobile' }]
          ],
          presets: ['es2015', 'react', 'stage-0']
        }
      }]
    }, {
      test: /\.(svg)$/i,
      use: 'svg-sprite-loader',
      include: [
        require.resolve('antd-mobile').replace(/warn\.js$/, ''),
        path.resolve(__dirname, 'src/assets/svg'),
      ]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },]
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['.web.js', '.jsx', '.js', '.json'],
  }
}
