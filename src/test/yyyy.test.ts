import { yyyy } from "../util/yyyy";

describe("yyyy class test", () => {
    test("valid value", () => {
        const MM1 = new yyyy(1);
        expect(MM1.value).toBe(1);
        expect(() => new yyyy(10000000)).not.toThrow();
    });

    test("invalid value", () => {
        expect(() => new yyyy(0.5)).toThrow();
        expect(() => new yyyy(0)).toThrow();
        expect(() => new yyyy(-1)).toThrow();
        expect(() => new yyyy(5.5)).toThrow();
        expect(() => new yyyy(32.5)).toThrow();
    });
});
