import { dd } from "../util/dd";

describe("dd class test", () => {
    test("valid value", () => {
        const dd1 = new dd(1);
        expect(dd1.value).toBe(1);
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
});
