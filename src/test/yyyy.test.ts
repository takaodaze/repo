import { yyyy } from "../util/yyyy";

describe("yyyy class test", () => {
    test("valid value", () => {
        expect(() => new yyyy(1)).not.toThrow();
        expect(() => new yyyy(10000000)).not.toThrow();
    });

    test("invalid value", () => {
        expect(() => new yyyy(0.5)).toThrow();
        expect(() => new yyyy(0)).toThrow();
        expect(() => new yyyy(-1)).toThrow();
        expect(() => new yyyy(5.5)).toThrow();
        expect(() => new yyyy(32.5)).toThrow();
    });

    test("equals()", () => {
        const _1998 = new yyyy(1998);
        expect(_1998.equals(new yyyy(1998))).toBe(true);
        expect(_1998.equals(new yyyy(2000))).toBe(false);
    });
});
