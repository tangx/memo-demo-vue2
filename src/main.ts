import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')


// 初始化 localStorage 数据
// import CataEnums from './model/CataEnums'
// import ItemData from './model/ItemData'
// import ActionHelper from './store/ActionHelper'
// const ah = new ActionHelper();
// const item = new ItemData(-1, CataEnums.Study, "title 2", "content 2")
// ah.add(item)
