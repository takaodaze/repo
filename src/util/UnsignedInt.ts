export class DateNumber {
    value: number;
    constructor(value: number) {
        const int = Math.floor(value);
        // 1 以上の整数しか許可しない
        if (int < 1 || isNaN(int)) {
            throw new Error(`failed to new DateNumber class:${value}`);
        }

        this.value = int;
    }

    equals = (un: DateNumber) => this.value === un.value;
}

export class UnsignedInt {
    value: number;
    constructor(value: number) {
        const int = Math.floor(value);
        const afterDecimalPoint = value - int;

        if (afterDecimalPoint !== 0 || int < 0 || isNaN(int)) {
            throw new Error(`failed to new UnsinedInt class:${value}`);
        }

        this.value = int;
    }
}
