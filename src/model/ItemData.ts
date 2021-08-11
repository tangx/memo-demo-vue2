class ItemData {
    id: number;
    cataId: number;
    title: string;
    content: string;
    createTime: string;

    constructor(id: number, cataId: number, title: string, content: string) {
        this.id = id
        this.cataId = cataId
        this.title = title
        this.content = content
        this.createTime = this.timeFormat(Date.now())


    }

    protected timeFormat(timestamp: number): string {

        // 转换时间格式
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate

        // 1. 将 timestamp 转换为 日期对象
        let date = new Date(timestamp)

        // 2. 使用 日期对象使用 getXXX 方法
        let datetime: string = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
        let hourminute: string = `${date.getHours()}: ${date.getMinutes()}`

        return `${datetime}T${hourminute}Z`

    }
}
