import { MM } from "../../util/MM";

export class MonthListUtil {
    static list = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
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
