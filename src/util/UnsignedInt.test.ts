import { UnsignedInt } from "./UnsignedInt";

describe("UnsignedInt class", () => {
    test("new", () => {
        const i = new UnsignedInt(1);
        expect(i.value).toBe(1);
    });

    test("invalid new", () => {
        expect(() => new UnsignedInt(0.5)).toThrow(Error);
        expect(() => new UnsignedInt(-1)).toThrow(Error);
    });
});
