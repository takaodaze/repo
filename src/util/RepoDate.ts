import { DATE_UPDATE_HOUR, MILLSEC_OF_DAY } from "../constant/constant";
import { DateNumber } from "./UnsignedInt";

export const makeDateTimeString = (
    year: DateNumber,
    month: DateNumber,
    date: DateNumber
) => {
    const yyyy = year.value;
    const MM = month.value < 10 ? `0${month.value}` : month.value;
    const dd = date.value < 10 ? `0${date.value}` : date.value;

    const mm =
        DATE_UPDATE_HOUR < 10 ? `0${DATE_UPDATE_HOUR}` : DATE_UPDATE_HOUR;

    return `${yyyy}-${MM}-${dd}T$${mm}:00`;
};

export class RepoDate {
    readonly year: DateNumber;
    readonly month: DateNumber;
    readonly date: DateNumber;

    constructor(year: number, month: number, date: number) {
        const y = new DateNumber(year);
        const m = new DateNumber(month);
        const d = new DateNumber(date);

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
        const yyyy = this.year.value;
        const MM =
            this.month.value < 10 ? `0${this.month.value}` : this.month.value;
        const dd =
            this.date.value < 10 ? `0${this.date.value}` : this.date.value;

        const hh =
            DATE_UPDATE_HOUR < 10 ? `0${DATE_UPDATE_HOUR}` : DATE_UPDATE_HOUR;

        const dateTimeString = `${yyyy}-${MM}-${dd}T${hh}:00`;

        const millsecOfThis = Date.parse(dateTimeString);
        return millsecOfThis;
    };

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
