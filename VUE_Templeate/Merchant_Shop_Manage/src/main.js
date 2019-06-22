
// import $ from 'jquery'

// import './css/index.css'
// import './css/test.scss'
// import './css/tet.less'

// class person{
//     pro(val){
//         console.log(val)
//     }

//     static info = {name: 'ss', age: '20'}
// }

// console.log(person.info)
// 如果需要使用上面的 es6 语法 class 那么我们需要通过第三方的 loader 把高级语法转换成低级的语法之后，会把结果交给 webpack 打包到 bundle.js 中、
// 通过 Babel ，可以帮我们将高级的语法转换成低级的语法
// 在 webpack 中,可以运行下面的两套命令，安装两套包，安装的 Babel 相关的loader功能
// 第一套包：cnpm i  "@babel/core" "@babel/preset-env" "@babel/runtime" "@babel/plugin-transform-runtime" -D
// 第二套包：cnpm i  "@babel/plugin-proposal-class-properties" babel-loader -D
// 然后打开 webpack 的配置文件中，在module节点中的rules中添加 一个新的匹配规则
// { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }  exclude 将配置到这的选项排除掉
// 详情网址 https://www.cnblogs.com/QianDingwei/p/10800795.html

// $(function(){
//     $('li:odd').css('backgroundColor', 'yellow')
//     $('li:even').css('backgroundColor', 'red')
// })


import Vue from "vue"
import app from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入路由的配置
import router from './router.js'


// 创建vm实例
var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    render: c => c(app),
    router

})
