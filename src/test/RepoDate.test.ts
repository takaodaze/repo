import { RepoDate } from "../util/RepoDate";

describe("RepoDate class test", () => {
    const repoDate = new RepoDate(1998, 12, 22);

    test("valid new", () => {
        expect(() => new RepoDate(1998, 12, 22)).not.toThrow();
    });

    test("invalid new", () => {
        expect(() => new RepoDate(-1, 12, 22)).toThrow();
        expect(() => new RepoDate(1998, -1, 22)).toThrow();
        expect(() => new RepoDate(1998, 12, -1)).toThrow();

        expect(() => new RepoDate(1998, 12, 0)).toThrow();
        expect(() => new RepoDate(1998, 0, 22)).toThrow();
        expect(() => new RepoDate(0, 12, 22)).toThrow();

        expect(() => new RepoDate(1998, 13, 22)).toThrow();
        expect(() => new RepoDate(1998, 6, 32)).toThrow();
    });

    test("equals()", () => {
        const expectEqualRepoDate = new RepoDate(1998, 12, 22);

        expect(repoDate.equals(expectEqualRepoDate)).toBe(true);
    });

    test("not equals", () => {
        const expectNotEqualsDate = new RepoDate(1998, 12, 23);
        expect(repoDate.equals(expectNotEqualsDate)).not.toBe(true);
    });

    test("prev()", () => {
        const d1 = new RepoDate(2022, 5, 1);
        expect(d1.prev().equals(new RepoDate(2022, 4, 30))).toBe(true);

        const d2 = new RepoDate(2022, 1, 1);
        expect(d2.prev().equals(new RepoDate(2021, 12, 31))).toBe(true);

        const d3 = new RepoDate(2022, 1, 2);
        expect(d3.prev().equals(new RepoDate(2022, 1, 1))).toBe(true);
    });

    test("next()", () => {
        expect(repoDate.next().equals(new RepoDate(1998, 12, 23))).toBe(true);
    });

    test("fromDate()", () => {
        const _19981222T120000 = new Date("1998-12-22T12:00:00");
        const rd19981222 = RepoDate.fromDate(_19981222T120000);
        expect(rd19981222.equals(new RepoDate(1998, 12, 22))).toBe(true);

        const _19981222T050000 = new Date("1998-12-22T05:00:00");
        const rd19981222_2 = RepoDate.fromDate(_19981222T050000);
        expect(rd19981222_2.equals(new RepoDate(1998, 12, 22))).toBe(true);

        const _19981222T040000 = new Date("1998-12-22T04:00:00");
        const rd19981221 = RepoDate.fromDate(_19981222T040000);
        expect(rd19981221.equals(new RepoDate(1998, 12, 21))).toBe(true);

        const _19981222T000000 = new Date("1998-12-22T00:00:00");
        const rd19981221_2 = RepoDate.fromDate(_19981222T000000);
        expect(rd19981221_2.equals(new RepoDate(1998, 12, 21))).toBe(true);
    });

    test("today()", () => {
        const today = RepoDate.today();
        const now = new Date();
        const target = RepoDate.fromDate(now);
        expect(today.equals(target)).toBe(true);
    });
});
