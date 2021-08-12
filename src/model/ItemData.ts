// import
import Catigory from "./CataEnums";

class ItemData {
    id: number;
    cataId: Catigory;
    title: string;
    content: string;
    createTime: string;

    // 这里因为有默认值， 因此可以进行类型推断。  eslint 返回会报错。
    // Type number trivially inferred from a number literal, remove type annotation  @typescript-eslint/no-inferrable-types
    constructor(id: number, cataId: Catigory = 0, title: string = '', content: string = '') {
        if (id < 1) {
            id = Date.now()
        }
        this.id = id
        this.cataId = cataId
        this.title = title
        this.content = content
        this.createTime = this.timeFormat(Date.now())
    }


    // 将时间戳转换为 2006-01-02T15:04Z 格式
    protected timeFormat(timestamp: number): string {

        // 转换时间格式
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate

        // 1. 将 timestamp 转换为 日期对象
        const date: Date = new Date(timestamp)

        // 2. 使用 日期对象使用 getXXX 方法
        const datetime: string = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
        const hourminute: string = `${date.getHours()}: ${date.getUTCMinutes()}`

        return `${datetime}T${hourminute}Z`

    }
}


export default ItemData;