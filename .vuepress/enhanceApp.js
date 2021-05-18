// 作为全局插件注册vuetify
// .vuepress/enhanceApp.js
import Vuetify from 'vuetify'

export default ({
  Vue,      // VuePress 应用正在使用的Vue版本
  options,  // 根Vue实例的选项
  router,   // 应用的路由实例
  siteData,  // 站点元数据
}) => {
  Vue.use(Vuetify)
}