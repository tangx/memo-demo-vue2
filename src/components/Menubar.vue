<template>
  <div>
    <nav>
      <span align="left">菜单栏</span>
      <button @click="openEditor">新建</button>
      <span>全部</span>
      <span>4</span>
    </nav>
  </div>
</template>

<script lang='ts'>
// import { Component } from "vue";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MenuBar extends Vue {
  openEditor() {
    this.$store.state.isMemoEditorVisibility = true;
  }
}
</script>
