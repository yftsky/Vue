const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // 模式: 生产环境
  mode: 'production',
  // 入口
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  // 出口(打包生成js)
  output: {
    filename: 'static/js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 模块加载器
  module: {
    rules: [
      //处理es6
      {
        test: /\.js$/,//用于匹配文件
        // exclude: /node_modules/,
        include:[path.resolve(__dirname,"src")],//只针对那些处理
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']//预设包:包含多个插件包的大包
          }
        }
      },
      //处理css
      {
        test: /\.css$/,
        //先执行右边的loder
        use: [
          'vue-style-loader',
          'css-loader'], // 多个loader从右到左处理
      },
      //处理图片
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use:[{
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
        }
      }
    ]
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader'
  }

]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',//将哪个页面作为模板页面处理(在根目录查找)
      filename: 'index.html',//生成页面(在output指定的path下)
    }),
    new VueLoaderPlugin()
  ],

  devServer: {
    open: true, // 自动打开浏览器
    // quiet: true, // 不做太多日志输出
  },
  
  devtool: 'cheap-module-eval-source-map',
    
  // 引入模块的解析
  resolve: {
    extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名,从左往右找
    alias: { // 路径别名(简写方式)
      'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配   带vue编译器
    }
  }
}