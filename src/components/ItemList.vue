<template>
  <div id="memos" class="container">
    <div>
      <MemoItem v-for="item in reverseMemoArr" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
// 在 main.ts 中， Vue 中已经包含了 store， 所以不需要再导入
// import store from "../store";

import ItemData from "@/model/ItemData";
import MemoItem from "./MemoItem.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    MemoItem,
  },

  computed: {
    reverseMemoArr() {
      return this.$store.state.aHelper.memoList.reverse();
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

<style>
.memo {
  margin: 2%;
  border: 1px solid black;
}
.title {
  font-size: 30px;
}
.content {
  margin: 3%;
  /* border: 1px solid black; */
}
</style>