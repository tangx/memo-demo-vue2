<template>
  <div>
    <div>
      <!-- 使用 v-model 绑定数据 -->
      <input
        id="edit-title"
        type="text"
        placeholder="标题"
        v-model="memo.title"
      />
      <input
        id="edit-catagory"
        type="text"
        placeholder="0 1 2"
        v-model="memo.cataId"
      />
    </div>
    <div>
      <textarea
        id="edit-content"
        type="text"
        placeholder="内容"
        v-model="memo.content"
      />
    </div>
    <div>
      <button @click="saveMemo">保存</button>
      <button @click="closeEditor">取消</button>
    </div>
    <p></p>
  </div>
</template>

<script lang="ts">
import ItemData from "@/model/ItemData";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class MemoEditor extends Vue {
  // 用来保存编辑内容
  // 初始化一个空
  //   memo: ItemData = new ItemData(-1, 0, "", "");
  memo!: ItemData;

  saveMemo() {
    // console.log(this.memo);
    if (
      this.memo.content.length > 0 &&
      this.memo.title.length > 0 &&
      this.memo.cataId < 3 &&
      this.memo.cataId > -1
    ) {
      this.$store.state.aHelper.add(this.memo);
    }
    this.closeEditor();
  }
  closeEditor() {
    this.$store.state.isMemoEditorVisibility = false;
    this.$store.state.transMemo = null;
  }

  created(): void {
    const _memo = this.$store.state.transMemo;
    // console.log("_memo::::", _memo);
    if (_memo == null) {
      this.memo = this.initMemo();
      return;
    }
    this.memo = _memo;
  }

  initMemo(): ItemData {
    return new ItemData(-1, 0, "", "");
  }
}
</script>