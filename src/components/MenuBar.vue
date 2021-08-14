<template>
  <div>
    <nav class="m-2 text-left navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-brand">
        {{ $store.state.title }}
        <span class="badge badge-secondary">
          <!-- {{ totalCount }} -->
          {{ $store.getters.totalCount }}
        </span>
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <div class="nav-link" @click="openEditor">新建</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" @click="initialTestData">测试数据</div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang='ts'>
import ItemData from "@/model/ItemData";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MenuBar extends Vue {
  openEditor(): void {
    // this.$store.state.isMemoEditorVisibility = true;
    this.$store.commit("setMemoEditorVisibility", true);
  }

  initialTestData(): void {
    const mockDatas: {
      title: string;
      content: string;
      cataId: number;
    }[] = [
      {
        title: "01. 前端太难了",
        content: "太难了",
        cataId: 1,
      },
      {
        title: "02. 切图是不可能的",
        content: "这辈子也不可能党切图仔的",
        cataId: 0,
      },
      {
        title: "03. 入门到放弃",
        content: "算求, 不学了",
        cataId: 2,
      },
    ];

    for (const ele of mockDatas) {
      setTimeout(() => {
        const memo: ItemData = new ItemData(
          -1,
          ele.cataId,
          ele.title,
          ele.content
        );
        // this.$store.state.aHelper.add(memo);
        this.$store.commit("aHelperAdd", memo);
      }, 10);
    }
  }
}
</script>
