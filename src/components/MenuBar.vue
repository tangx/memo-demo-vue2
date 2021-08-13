<template>
  <div>
    <nav>
      <span align="left">菜单栏</span>
      <button @click="openEditor">新建</button>
      <span>全部</span>
      <span>{{ totalCount }} </span>
      <div>
        <button @click="initialTestData">创建测试数据</button>
      </div>
    </nav>
  </div>
</template>

<script lang='ts'>
import ItemData from "@/model/ItemData";
import { Component, Vue } from "vue-property-decorator";

@Component({
  computed: {
    totalCount() {
      return this.$store.state.aHelper.memoList.length;
    },
  },
})
export default class MenuBar extends Vue {
  openEditor(): void {
    this.$store.state.isMemoEditorVisibility = true;
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
        this.$store.state.aHelper.add(memo);
      }, 10);
    }
  }
}
</script>
