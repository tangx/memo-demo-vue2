// 1. 导入 vuex 和 vue
import Vue from 'vue'
import Vuex from 'vuex'
import ActionHelper from './ActionHelper';

// 2. 注册 vuex 到 vue 里面
Vue.use(Vuex)

// 3. 创建 vuex 的仓库对象
const store = new Vuex.Store({
    // 严格模式
    // https://vuex.vuejs.org/zh/guide/strict.html
    strict: true,

    state: {
        title: '用户界面最友好的备忘录工具',
        aHelper: new ActionHelper(),

        // 是否显示编辑框
        isMemoEditorVisibility: false,

        // 传递 memo 对象
        transMemo: null,
    },
    getters: {
        totalCount: state => {
            return state.aHelper.memoList.length
        },
        MemoArr: state => {
            return state.aHelper.memoList
        },
        reverseMemoArr: state => {
            return state.aHelper.memoList.reverse()
        }
    },
    mutations: {
        openMemoEditor(state: any, memo: any) {
            state.transMemo = memo
            state.isMemoEditorVisibility = true;

        },
        resetTransMemo(state: any) {
            state.transMemo = null
        }
    },

    // actions: {
    // },
    // modules: {
    // }
})

// 4. 导出 仓库
export default store;
