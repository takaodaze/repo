import { MonthListUtil } from "../component/Heaatmap/MonthListUtil";

describe("MonthListUtil class", () => {
    test("new", () => {
        expect(() => new MonthListUtil(4)).not.toThrow();
        expect(() => new MonthListUtil(12)).not.toThrow();
        expect(() => new MonthListUtil(1)).not.toThrow();
    });

    test("new with invalid value", () => {
        expect(() => new MonthListUtil(0)).toThrow();
        expect(() => new MonthListUtil(13)).toThrow();
        expect(() => new MonthListUtil(1.3)).toThrow();
        expect(() => new MonthListUtil(-1)).toThrow();
    });

    test("year roll list", () => {
        const apr = new MonthListUtil(4);
        const listStartWithApr = apr.listRollYear();
        expect(listStartWithApr).toHaveLength(13);
        expect(listStartWithApr[0]).toBe("Apr");
        expect(listStartWithApr[3]).toBe("Jul");
        expect(listStartWithApr[12]).toBe("Apr");

        const dec = new MonthListUtil(12);
        const listStartWithDec = dec.listRollYear();
        expect(listStartWithDec).toHaveLength(13);
        expect(listStartWithDec[0]).toBe("Dec");
        expect(listStartWithDec[1]).toBe("Jan");
        expect(listStartWithDec[12]).toBe("Dec");
    });
});
