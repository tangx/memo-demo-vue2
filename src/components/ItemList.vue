<template>
  <div id="memos" class="container">
    <div class="memo" v-for="item in memoArr" :key="item.id" :id="item.id">
      <div class="title">{{ item.title }}</div>
      <div class="time">{{ item.createTime }} <button>编辑</button></div>

      <div class="content">
        {{ item.content }}
      </div>
    </div>
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