<template>
  <div id="memos" class="container">
    <div>
      <MemoItem v-for="item in reverseMemoArr" :key="item.id" :memo="item" />
    </div>
  </div>
</template>

<script lang="ts">
// 在 main.ts 中， Vue 中已经包含了 store， 所以不需要再导入
// import store from "../store";

import MemoItem from "./MemoItem.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    MemoItem,
  },

  computed: {
    reverseMemoArr() {
      //   return this.$store.state.aHelper.memoList.reverse();
      return this.$store.getters.reverseMemoArr;
    },
  },
})
export default class ItemList extends Vue {
  // 使用 this 代指当前 Vue 域
  //   memoArr: ItemData[] = this.$store.state.aHelper.memoList;
  // 倒序显示
  // https://blog.csdn.net/Vicki_/article/details/80094602
  //   reverseMemoArry(): ItemData[] {
  //     // const rev = this.memoArr.reverse();
  //     // return rev;
  //     return this.memoArr.reverse();
  //   }
}
</script>