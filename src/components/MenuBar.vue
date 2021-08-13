<template>
  <div>
    <nav>
      <span align="left">菜单栏</span>
      <button @click="openEditor">新建</button>
      <span>全部</span>
      <span>{{ totalCount }} </span>
    </nav>
  </div>
</template>

<script lang='ts'>
// import { Component } from "vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  computed: {
    totalCount() {
      return this.$store.state.aHelper.memoList.length;
    },
  },
})
export default class MenuBar extends Vue {
  openEditor() {
    this.$store.state.isMemoEditorVisibility = true;
  }
}
</script>
