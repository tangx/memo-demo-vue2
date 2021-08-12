<template>
  <div id="memos" class="container">
    <p v-for="item in memoArr" :key="item.id">
      <span>
        {{ item.title }}
        {{ item.content }}
        {{ item.createTime }}
      </span>
    </p>
  </div>
</template>

<script lang="ts">
import ItemData from "@/model/ItemData";
import Vue from "vue";

// 在 main.ts 中， Vue 中已经包含了 store， 所以不需要再导入
// import store from "../store";

// extends Vue 继承 vue
export default class ItemList extends Vue {
  // 使用 this 代指当前 Vue 域
  memoArr: ItemData[] = this.$store.state.aHelper.memoList;
}
</script>
