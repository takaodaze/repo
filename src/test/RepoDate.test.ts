import { RepoDate } from "../util/RepoDate";

describe("RepoDate class test", () => {
    const repoDate = new RepoDate(1998, 12, 22);

    test("equals", () => {
        const expectEqualRepoDate = new RepoDate(1998, 12, 22);

        expect(repoDate.equals(expectEqualRepoDate)).toBe(true);
    });

    test("not equals", () => {
        const expectNotEqualsDate = new RepoDate(1998, 12, 23);
        expect(repoDate.equals(expectNotEqualsDate)).not.toBe(true);
    });

    test("prev", () => {
        const d1 = new RepoDate(2022, 5, 1);

        expect(d1.prev().equals(new RepoDate(2022, 4, 30))).toBe(true);

        const d2 = new RepoDate(2022, 1, 1);

        expect(d2.prev().equals(new RepoDate(2021, 12, 31))).toBe(true);

        const d3 = new RepoDate(2022, 1, 2);

        expect(d3.prev().equals(new RepoDate(2022, 1, 1))).toBe(true);
    });

    test("next", () => {
        expect(repoDate.next().equals(new RepoDate(1998, 12, 23))).toBe(true);
    });
});
