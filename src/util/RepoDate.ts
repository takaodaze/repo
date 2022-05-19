import { DATE_UPDATE_HOUR, MILLSEC_OF_DAY } from "../constant/constant";
import { DateNumber } from "./UnsignedNumber";

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

    constructor(year: DateNumber, month: DateNumber, date: DateNumber) {
        this.year = year;
        this.month = month;
        this.date = date;
    }

    static fromDate(d: Date) {
        const h = d.getHours();
        if (0 <= h && h < DATE_UPDATE_HOUR) {
            d.setTime(d.getTime() - MILLSEC_OF_DAY);
        }

        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const date = d.getDate();

        return new RepoDate(
            new DateNumber(year),
            new DateNumber(month),
            new DateNumber(date)
        );
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

        const mm =
            DATE_UPDATE_HOUR < 10 ? `0${DATE_UPDATE_HOUR}` : DATE_UPDATE_HOUR;

        const dateTimeString = `${yyyy}-${MM}-${dd}T${mm}:00`;
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
