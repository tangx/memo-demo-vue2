// ActionHelper 关联业务与数据

import ItemData from "@/model/ItemData"
import CommonDataHelper from "./CommonDataHelper"

class ActionHelper {
    // 1. 负责数据处理
    dataHelper: CommonDataHelper = new CommonDataHelper('hmMemo', 'id');

    // 2. 负责业务处理
    memoList: ItemData[];

    constructor() {
        // 读取 localStorage 中的数据，并复制给 memoList
        this.memoList = this.readData()
    }

    // 读取数据
    readData(): ItemData[] {
        // const arr: ItemData[] = this.dataHelper.readData() as ItemData[]
        // return arr

        return this.dataHelper.readData() as ItemData[]
    }

    // 添加
    add(item: ItemData): number {

        // append
        // const s = JSON.stringify(item);
        this.dataHelper.addData(item);

        // reload
        this.memoList = this.dataHelper.readData()

        return item.id
    }

    // 删除
    remove(id: number): void {
        if (this.dataHelper.removeData(id)) {
            this.memoList = this.readData()
        }
    }

    // 编辑
    edit(item: ItemData): void {

        // 查找
        const editItem: ItemData | undefined = this.memoList.find((eleItem) => {
            return eleItem.id === item.id
        })

        const _eItem: ItemData = editItem as ItemData

        // if exist then replace
        if (editItem) {
            editItem.content = item.content
            editItem.cataId = item.cataId
            this.remove(item.id)
            this.add(item)
        }
    }
}

export default ActionHelper;