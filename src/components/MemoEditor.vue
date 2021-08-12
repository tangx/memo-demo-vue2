<template>
  <div>
    <div>
      <input id="edit-title" type="text" placeholder="标题" />
      <input id="edit-catagory" type="text" placeholder="0 1 2" />
    </div>
    <div>
      <input id="edit-content" type="text" placeholder="内容" />
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
  memo!: ItemData;

  saveMemo(memo: ItemData) {
    // mome.id = Date.now().toString;
    // this.$store.state.aHelper.add(memo);
    this.closeEditor();
  }
  closeEditor() {
    this.$store.state.isMemoEditorVisibility = false;
  }
}
</script>