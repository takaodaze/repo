export class UnsignedNumber {
    value: number;
    constructor(value: number) {
        if (value < 0) {
            throw new Error(`failed to new UnsignedNumber class:${value}`);
        }
        this.value = value;
    }

    equals = (un: UnsignedNumber) => this.value === un.value;
}
