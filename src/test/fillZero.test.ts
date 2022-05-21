import { fillZeroUnderTen } from "../util/fillZero";

describe("fillZero", () => {
    test("less than 10", () => {
        expect(fillZeroUnderTen(0)).toBe("00");
        expect(fillZeroUnderTen(4)).toBe("04");
    });

    test("grater than 10", () => {
        expect(fillZeroUnderTen(11)).toBe("11");
        expect(fillZeroUnderTen(100)).toBe("100");
    });

    test("minus", () => {
        expect(fillZeroUnderTen(-1)).toBe("-01");
        expect(fillZeroUnderTen(-10)).toBe("-10");
    });
});
