<template>
  <div class="memo" :key="memo.id" :memo-id="memo.id">
    <div class="title">{{ memo.title }}</div>
    <div class="time">{{ memo.createTime }} <button>编辑</button></div>

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
}
</script>