import { MM } from "../util/MM";

describe("MM class test", () => {
    test("valid value", () => {
        expect(() => new MM(1)).not.toThrow();
        expect(() => new MM(12)).not.toThrow();
    });

    test("invalid value", () => {
        expect(() => new MM(0.5)).toThrow();
        expect(() => new MM(0)).toThrow();
        expect(() => new MM(-1)).toThrow();
        expect(() => new MM(5.5)).toThrow();
        expect(() => new MM(13)).toThrow();
        expect(() => new MM(32.5)).toThrow();
        expect(() => new MM(100)).toThrow();
    });

    test("equals", () => {
        const jan = new MM(1);
        expect(jan.equals(new MM(1))).toBe(true);
        expect(jan.equals(new MM(2))).toBe(false);
    });
});
