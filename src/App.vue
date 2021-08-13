<template>
  <div id="app">
    <h1>{{ $store.state.title }}</h1>

    <div>
      <MemoEditor v-if="$store.state.isMemoEditorVisibility" />
      <MemuBar />
      <ItemList />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MemuBar from "./components/MenuBar.vue";
import ItemList from "./components/ItemList.vue";
import MemoEditor from "./components/MemoEditor.vue";

@Component({
  components: {
    MemuBar,
    ItemList,
    MemoEditor,
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

// include css
<style src='./static/memo.css'></style>
