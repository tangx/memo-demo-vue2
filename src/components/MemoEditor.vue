<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <!-- input GROUP 1 -->
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">标题</span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="请输入标题"
            v-model="memo.title"
          />
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">分类</span>
            <select
              class="custom-select"
              id="inputGroupSelect01"
              v-model="memo.cataId"
            >
              <option selected>Choose...</option>
              <option value="0">工作</option>
              <option value="1">学习</option>
              <option value="2">生活</option>
            </select>
          </div>
        </div>
        <!-- content -->
        <div class="form-group">
          <!-- <label for="exampleFormControlTextarea1">Example textarea</label> -->
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="请输入正文内容"
            v-model="memo.content"
          ></textarea>
        </div>
      </div>
      <div>
        <button class="m-3 btn btn-primary" @click="saveMemo">保存</button>
        <button class="m-3 btn btn-outline-danger" @click="closeEditor">
          取消
        </button>
      </div>
    </div>
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
      //   this.$store.state.aHelper.add(this.memo);
      this.$store.commit("aHelperAdd", this.memo);
    }
    this.closeEditor();
  }
  closeEditor() {
    // this.$store.state.isMemoEditorVisibility = false;
    this.$store.commit("setMemoEditorVisibility", false);

    // https://vuex.vuejs.org/zh/guide/forms.html
    // 使用 mutation 事件修改数据， 而非直接修改。
    // this.$store.state.transMemo = null;
    this.$store.commit("resetTransMemo");
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