
// 将路由重  main.js  中抽离出来 单独放到我们的router.就是中

// 引入路由
import VueRouter from 'vue-router'

// 导入对应的模板组件
import account from './main/Account.vue'
import goodlist from './main/GoodList.vue'
import acco from './submain/acco.vue'
import good from './submain/good.vue'
import head from './commons/head.vue'
import menu from './commons/menu.vue'
import main from './commons/main.vue'

// 创建路由对象
var router = new VueRouter({
    routes: [
        {
            path: '/account',
            component: account,
            children: [
                { path: 'acco', component: acco },
                { path: 'good', component: good }
            ]
        },
        { path: '/goodlist', component: goodlist },
        {
            path: '/', components: {
                'head':head,
                'menu':menu,
                'main':main
            }
        }
    ]

})

export default router