import { DATE_UPDATE_HOUR, MILLSEC_OF_DAY } from "../constant/constant";
import { dd } from "./dd";
import { fillZeroUnderTen } from "./fillZero";
import { MM } from "./MM";
import { yyyy } from "./yyyy";

export class RepoDate {
    readonly year: yyyy;
    readonly month: MM;
    readonly date: dd;

    constructor(year: number, month: number, date: number) {
        const y = new yyyy(year);
        const m = new MM(month);
        const d = new dd(date);

        this.year = y;
        this.month = m;
        this.date = d;
    }

    static fromDate(d: Date) {
        const cloneD = new Date(d.getTime());

        const h = cloneD.getHours();
        if (0 <= h && h < DATE_UPDATE_HOUR) {
            cloneD.setTime(cloneD.getTime() - MILLSEC_OF_DAY);
        }

        const year = cloneD.getFullYear();
        const month = cloneD.getMonth() + 1;
        const date = cloneD.getDate();

        return new RepoDate(year, month, date);
    }

    static fromMs(ms: number) {
        const d = new Date(ms);
        return RepoDate.fromDate(d);
    }

    static today() {
        const now = new Date();
        return RepoDate.fromDate(now);
    }

    private toMillsec = () => {
        const yyyy = this.year.un.value;
        const MM =
            this.month.un.value < 10
                ? `0${this.month.un.value}`
                : this.month.un.value;
        const dd =
            this.date.un.value < 10
                ? `0${this.date.un.value}`
                : this.date.un.value;

        const hh =
            DATE_UPDATE_HOUR < 10 ? `0${DATE_UPDATE_HOUR}` : DATE_UPDATE_HOUR;

        const dateTimeString = `${yyyy}-${MM}-${dd}T${hh}:00`;

        const millsecOfThis = Date.parse(dateTimeString);
        return millsecOfThis;
    };

    toDateTimeString() {
        const yyyy = this.year.un.value;
        const MM = fillZeroUnderTen(this.month.un.value);
        const dd = fillZeroUnderTen(this.date.un.value);
        const hh = fillZeroUnderTen(DATE_UPDATE_HOUR);

        return `${yyyy}-${MM}-${dd}T$${hh}:00`;
    }

    MMdd() {
        const MM = fillZeroUnderTen(this.month.un.value);
        const dd = fillZeroUnderTen(this.date.un.value);

        return `${MM}/${dd}`;
    }

    yyyyMMdd() {
        const yyyy = this.year.un.value;
        const MM = fillZeroUnderTen(this.month.un.value);
        const dd = fillZeroUnderTen(this.date.un.value);

        return `${yyyy}/${MM}/${dd}`;
    }

    equals(repoDate: RepoDate) {
        if (
            this.year.equals(repoDate.year) &&
            this.month.equals(repoDate.month) &&
            this.date.equals(repoDate.date)
        ) {
            return true;
        } else {
            return false;
        }
    }

    prev() {
        const thisMillsec = this.toMillsec();
        const millsecOfYesterday = thisMillsec - MILLSEC_OF_DAY;
        return RepoDate.fromMs(millsecOfYesterday);
    }

    next() {
        const thisMillsec = this.toMillsec();
        const millsecOfYesterday = thisMillsec + MILLSEC_OF_DAY;
        return RepoDate.fromMs(millsecOfYesterday);
    }
}
