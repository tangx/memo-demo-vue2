<template>
  <div class="memo" :key="memo.id" :memo-id="memo.id">
    <div class="title">{{ memo.title }}</div>
    <div class="time">
      {{ memo.createTime }}
      <button @click="editMemo">编辑</button>
      <button @click="delMemo">删除</button>
    </div>

    <div class="content">
      {{ memo.content }}
    </div>
  </div>
</template>

<script lang="ts">
import ItemData from "@/model/ItemData";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class MemoItem extends Vue {
  @Prop() memo!: ItemData;

  delMemo(): void {
    const id = this.memo.id;
    this.$store.state.aHelper.remove(id);
  }

  editMemo(): void {
    // 因为 this.memo 是一个指针对象， 编辑框中的数据被修改， 所有展示数据都将被修改。 但是不会被持久化。
    // 为了保护元数据， 需要生成一个副本。
    const _memo = JSON.parse(JSON.stringify(this.memo));

    // 传递副本
    this.$store.commit("openMemoEditor", _memo);
  }
}
</script>