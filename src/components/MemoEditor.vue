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
      <input
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

@Component
export default class MemoEditor extends Vue {
  // 用来保存编辑内容
  // 初始化一个空
  memo: ItemData = new ItemData(-1, 0, "", "");

  saveMemo() {
    // console.log(this.memo);
    this.$store.state.aHelper.add(this.memo);
    this.closeEditor();
  }
  closeEditor() {
    this.$store.state.isMemoEditorVisibility = false;
  }
}
</script>