import { MM } from "../../util/MM";

export class MonthListUtil {
    static list = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
    ];

    private pointer: number;

    constructor(currentMonth: number) {
        const mm = new MM(currentMonth);
        this.pointer = mm.un.value - 1;
    }

    listRollYear() {
        const temp = [];
        // 一周させる
        for (let i = 0; i < 13; i++) {
            temp.push(MonthListUtil.list[this.pointer % 12]);
            this.pointer++;
        }
        this.pointer--;
        return temp;
    }
}
