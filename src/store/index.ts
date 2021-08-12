// 1. 导入 vuex 和 vue
import Vue from 'vue'
import Vuex from 'vuex'
import ActionHelper from './ActionHelper';

// 2. 注册 vuex 到 vue 里面
Vue.use(Vuex)

// 3. 创建 vuex 的仓库对象
const store = new Vuex.Store({
    state: {
        title: '我是用户友好的 备忘录 工具',
        aHelper: new ActionHelper(),

        // 是否显示编辑框
        isMemoEditorVisibility: false,

    },
    mutations: {
    },

    // actions: {
    // },
    // modules: {
    // }
})

// 4. 导出 仓库
export default store;
