import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ItemData from './model/ItemData'
import Catigory from './model/CataEnums'

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')


const item2 = new ItemData(1, Catigory.Work, "你好 vue", "这是我用 vue 写的第一个网站")
console.log("item2::: =>", item2)

