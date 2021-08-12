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
import store from "../store";

export default class ItemList extends Vue {
  memoArr: ItemData[] = this.$store.state.aHelper.memoList;
}
</script>
