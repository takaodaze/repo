import { DATE_UPDATE_HOUR, MILLSEC_OF_DAY } from "../constant/constant";
import { UnsignedNumber } from "./UnsignedNumber";

export class RepoDate {
    year: UnsignedNumber;
    month: UnsignedNumber;
    date: UnsignedNumber;

    constructor(
        year: UnsignedNumber,
        month: UnsignedNumber,
        date: UnsignedNumber
    ) {
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
            new UnsignedNumber(year),
            new UnsignedNumber(month),
            new UnsignedNumber(date)
        );
    }

    static today() {
        const now = new Date();
        return RepoDate.fromDate(now);
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
}
