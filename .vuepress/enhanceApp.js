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

// 或者直接从CDN使用vuetify.
// 像下面一样更新 .vuepress/config.js 的头部部分.
module.exports = {
  head: [
    ['link', {
      rel: 'stylesheet',
      href: `https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css`
    }],
    ['script', { src: `https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js` }],
    ['script', { src: `https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js` }],
  ]
}