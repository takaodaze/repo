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
        expect(listStartWithApr[0]).toBe("4月");
        expect(listStartWithApr[3]).toBe("7月");
        expect(listStartWithApr[12]).toBe("4月");

        const dec = new MonthListUtil(12);
        const listStartWithDec = dec.listRollYear();
        expect(listStartWithDec).toHaveLength(13);
        expect(listStartWithDec[0]).toBe("12月");
        expect(listStartWithDec[1]).toBe("1月");
        expect(listStartWithDec[12]).toBe("12月");
    });
});
