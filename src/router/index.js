import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes/index'

// 引入加载条的插件和css样式
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'//这个样式必须引入
Vue.use(Router)

const router = new Router({
  routes,
  mode:'history'
})

// 配置NProgress插件
NProgress.inc(1.0)//刷新
NProgress.configure({
  easing: 'ease',
  speed: 2000,
  showSpinner: false
})
// 在全局前置守卫让加载条开始
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
// 在全局后置守卫让加载条关闭
router.afterEach(() => {
  NProgress.done()
})


export default router
