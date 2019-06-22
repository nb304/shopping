//创建webpack.config.js

// 引入对应的插件模块
const path = require('path');
const webpack = require('webpack');
const htmlplugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 暴露接口
module.exports = {
    entry: path.join(__dirname, './src/main.js'), //入口文件
    output: {
        //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径 
        path: path.join(__dirname, './dist'), //输出位置（文件夹）
        filename: 'bundle.js' //输入文件(输出到的文件内部)
    },
    // devServer：{     // 这是配置 dev-server 命令参数的第二种形式，相对于下面的噢诶之相对于麻烦一些
    //相对于第一种在 wevpack.config.js 中配置 --open --port 3000 --contentBase src --hot 
    //     open: true,    // 自动打开浏览器
    //     port: 3000,     // 设置启动时候的运行端口
    //     contentBase: 'src',     // 指定托管目录
    //     hot: true   // 启动热更新
    // },
    plugins: [  // 配置插件的节点
        // new webpack.HotModuleReplacementPlugin()    // new 一个热更新的模块对象 ,这是启用热更新的第3部

        new htmlplugin({    // 创建一个   在内存中生成一个HTML页面  页面的插件
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'      // 指定生成的页面名称
        }),
        new VueLoaderPlugin()
    ],
    module: {   // 用于配置所有的第三方模块 加载器的节点
        rules: [    // 配置第三方模块的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 匹配 .css文件导入配置  (需要安装的依赖包 style-loader、style-loader、css-loader )
            { test: /\.scss/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            // 匹配 .acss文件导入配置  (需要安装的依赖包 node-sass、sass-loader )
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // 匹配 .less文件p配置   (需要安装的依赖包 less、less-loader)
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7000&name=[hash:8]-[name].[ext]' },
            // 匹配 图片后缀 处理图片的loader
            // limit 给定的值，是图片的大小，单位是（btye）, 如果我们引用的图片大于或等于给定的 limit 值，则不会被转成 base64 格式得字符串 
            // name 给定的值是 [name] 表示使用图片的原名字，[hase:8] 表示转 8 位的hase值设置成图片名
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            // 处理字体文件的loader
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            // 配置将 babelrc.js 通过 webpack 打包 ，exclude 的意思是 将 node_modules 中的 js 文件排除在外
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    }
}