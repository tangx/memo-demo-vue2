<template>
  <div>
    <nav>
      <p>
        <span>菜单栏</span>
        <br />
        <span>新建</span>
        <br />
        <span>全部</span>&nbsp;<span>4</span>
      </p>
    </nav>
  </div>
</template>

<script lang='ts'>
// import { Component } from "vue";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MenuBar extends Vue {}
</script>
