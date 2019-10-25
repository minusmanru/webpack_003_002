var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

//const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  // optimization: {
  //   minimizer: [new OptimizeCSSAssetsPlugin({}), new UglifyJsPlugin()]
  // },

  optimization: {
    minimizer: [ new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    }), 
    new UglifyJsPlugin()]
  
  },
  
  devServer: { // 12.1
    contentBase: path.resolve(__dirname, './dist'), // 12.1.1 путь к папке проекта
    port: 4200
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/temp.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css' // 10.2 имя файла в который экспортируются стили
    }),

    

  ],
  resolve: {
    extensions: ['.js', '.ts'] // - 19.1  что бы не писать в импортах расширения файлов, пишем    extentions: ['.js', '.ts'] также можно добавить css и т.д
  },

  module: { 
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'] // 10.1 теперь экспортируем стили в отдельный файл
        //use: ['style-loader', 'css-loader'], // 9.1 wp будет читать эту строчку справа на лево, style-loader - поместит стили в head 
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'] // - 14.1  
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] // - 15.1  
      },
      
      { test: /\.(js|ts)$/, // - 19.1  добавляем |ts  вместо /\.js$/, пишем  (js|ts)
        exclude: /node_modules/, 
        loader: "babel-loader" 
      } // 13.1
      

    ]
  }
  
};
