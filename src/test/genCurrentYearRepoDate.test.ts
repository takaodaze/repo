import { genCurrentYearRepoDate } from "../component/Heaatmap/genCurrentYearRepoDate";

describe("genCurrentYearRepoDate()", () => {
    test("length", () => {
        const now = new Date();
        const diffMonday = Math.abs(now.getDay() - 1);
        const arr = genCurrentYearRepoDate();
        expect(arr).toHaveLength(diffMonday + 365);
    });
});
