import { genCurrentRepoDate } from "../component/BarGraph/genCurrenRepoDate";
import { MILLSEC_OF_DAY } from "../constant/constant";

describe("genCurrentRepoDate()", () => {
    test("length", () => {
        const arr = genCurrentRepoDate(3);
        const d = new Date();
        expect(arr).toHaveLength(3);
        expect(arr[0].date.un.value).toBe(d.getDate());
        const d2 = new Date(d.getTime() - MILLSEC_OF_DAY * 2);
        expect(arr[2].date.un.value).toBe(d2.getDate());
    });
});
