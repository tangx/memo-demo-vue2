<template>
  <div id="app">
    <MemuBar />
  </div>
</template>

<script lang="ts">
import PostDataHelper from "./store/PostDataHelper";
let dh: PostDataHelper = new PostDataHelper("testpost", "id");
dh.addData("post01: new post 1");
dh.addData("post02: new post 2");
</script>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MemuBar from "./components/MenuBar.vue";

@Component({
  components: {
    MemuBar,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

