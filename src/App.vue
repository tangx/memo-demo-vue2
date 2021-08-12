<template>
  <div id="app">
    {{ $store.state.title }}
    {{ $store.state.loveCount }}
    <MemuBar />
    <ItemList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MemuBar from "./components/MenuBar.vue";
import ItemList from "./components/ItemList.vue";

@Component({
  components: {
    MemuBar,
    ItemList,
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

