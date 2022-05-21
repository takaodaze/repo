import { DateNumber } from "../util/UnsignedInt";

describe("DateNumber class test", () => {
    test("equals", () => {
        const v1 = new DateNumber(2);
        const v2 = new DateNumber(2);

        expect(v1.equals(v2)).toBe(true);
        expect(v1.value).toEqual(v2.value);

        const v3 = new DateNumber(5);
        expect(v3.equals(v1)).toBe(false);
        expect(v3.value).not.toEqual(v1.value);
    });

    test("new on invalid value", () => {
        expect(() => new DateNumber(0)).toThrow();
        expect(() => new DateNumber(0.5)).toThrow();
        expect(() => new DateNumber(-1)).toThrow();
    });
});
