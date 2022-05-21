import { dd } from "../util/dd";

describe("dd class test", () => {
    test("valid value", () => {
        expect(() => new dd(1)).not.toThrow();
        expect(() => new dd(20)).not.toThrow();
        expect(() => new dd(31)).not.toThrow();
    });
    test("invalid value", () => {
        expect(() => new dd(0.5)).toThrow();
        expect(() => new dd(0)).toThrow();
        expect(() => new dd(-1)).toThrow();
        expect(() => new dd(5.5)).toThrow();
        expect(() => new dd(32)).toThrow();
        expect(() => new dd(32.5)).toThrow();
        expect(() => new dd(100)).toThrow();
    });

    test("equals()", () => {
        const _1 = new dd(1);
        expect(_1.equals(new dd(1))).toBe(true);
        expect(_1.equals(new dd(2))).toBe(false);
    });
});
