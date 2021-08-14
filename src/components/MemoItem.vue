<template>
  <div style="margin: 1%" class="mt-0" :key="memo.id" :memo-id="memo.id">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ memo.title }}</h5>
        <h5 class="card-title small">
          {{ memo.createTime }}
          <br />
          分类: {{ $store.state.aHelper.catagoryTranslate(memo.cataId) }}
        </h5>
        <p class="card-text">
          {{ memo.content }}
        </p>
        <div>
          <div @click="editMemo" class="m-1 btn btn-outline-primary">编辑</div>
          <div @click="delMemo" class="m-1 btn btn-outline-danger">删除</div>
        </div>
      </div>
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
    // this.$store.state.aHelper.remove(id);
    this.$store.commit("aHelperRemove", id);
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