<template>
  <div class="memo" :key="item.id" :memo-id="item.id">
    <div class="title">{{ item.title }}</div>
    <div class="time">{{ item.createTime }} <button>编辑</button></div>

    <div class="content">
      {{ item.content }}
    </div>
  </div>
</template>

<script lang="ts">
import ItemData from "@/model/ItemData";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class MemoItem extends Vue {
  @Prop() item!: ItemData;
}
</script>