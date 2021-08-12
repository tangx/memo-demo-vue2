import Vue from 'vue'
import App from './App.vue'
import CataEnums from './model/CataEnums'
import ItemData from './model/ItemData'
import store from './store'
import ActionHelper from './store/ActionHelper'


Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')

