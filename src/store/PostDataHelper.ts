// DataHelper use localStorage store datas
interface Post {
    id: string
    content: string
}

class PostDataHelper {
    // dataKey: localStorage 保存数据的 key。
    dataKey: string
    // primaryKey: 文章 ID 的字面量
    primaryKey: string


    // let dp = new DataHelper('memoData','id')
    constructor(dataKey: string, postKey: string) {
        this.dataKey = dataKey;
        this.primaryKey = postKey
    }

    // 1. 读取所有数据
    readData(): Post[] {
        // 1. 根据 dataKey 读取本地保存的数据
        const strData: string | null = localStorage.getItem(this.dataKey)

        // 2. 将数据转换为 json 对象
        let arrData: Post[] = []
        if (strData != null) {
            arrData = JSON.parse(strData)
        }

        // 3. 返回数据对象
        return arrData
    }

    // 2. 将数据持久化到 localStorage
    saveData(arrData: Post[]): void {
        // 1. arrData 转换为 字符串
        const strData = JSON.stringify(arrData)

        // n. localStorage 持久化数据
        localStorage.setItem(this.dataKey, strData)
    }

    // 3. 新增一条数据， 返回数据对应的编号
    addData(content: string): string {
        // 获取 data
        const arr: Post[] = this.readData()

        // 创建新 Post 实例
        // const newPost: Post = new Post(newId, content)
        // 使用时间作 ID
        const newId = Date.now().toString()
        const post: Post = {
            id: newId,
            content: content
        }

        // 数组扩容
        arr.push(post)

        // 保存
        this.saveData(arr)

        return newId
    }

    // 4. 删除数据
    removeData(id: string | number): boolean {

        const arr: Post[] = this.readData()

        const index = arr.findIndex(
            (post) => { // 箭头函数
                return post.id === id
            }
        )

        // 找到返回下标， 找不到返回 -1
        if (index > -1) {
            // 删除 并 保存
            arr.splice(index, 1)
            this.saveData(arr)

            return true
        }

        return false
    }
}

export default PostDataHelper
