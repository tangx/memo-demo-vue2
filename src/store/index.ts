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
    // 返回公共调用数据， 避免每个地方都修改
    getters: {
        totalCount: state => {
            return state.aHelper.memoList.length
        },

        reverseMemoArr: state => {
            // 指针对象， 所以反转 违反了 strict
            // https://qastack.cn/programming/30610523/reverse-array-in-javascript-without-mutating-original-array
            // 使用 slice() 创建一个切片拷贝
            // return state.aHelper.memoList.reverse()
            return state.aHelper.memoList.slice().reverse()

        },

        memoEditorVisibility: state => {
            return state.isMemoEditorVisibility
        }

    },
    // 应该是修改 state 中数据的唯一方式
    mutations: {
        openMemoEditor(state: any, memo: any) {
            state.transMemo = memo
            this.setMemoEditorVisibility(state, true)
        },
        resetTransMemo(state: any) {
            state.transMemo = null
        },
        setMemoEditorVisibility(state: any, status: boolean) {
            state.isMemoEditorVisibility = status
        },
        aHelperAdd(state: any, memo: any) {
            state.aHelper.add(memo)
        },
        aHelperRemove(state: any, id: number) {
            state.aHelper.remove(id)
        }
    },

    // actions: {
    // },
    // modules: {
    // }
})

// 4. 导出 仓库
export default store;
