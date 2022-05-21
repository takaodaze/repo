import { UnsignedInt } from "./UnsignedInt";

export class dd {
    readonly un: UnsignedInt;
    constructor(n: number) {
        const un = new UnsignedInt(n);
        if (un.value < 1 || un.value > 31) {
            throw new Error(`failed to new dd instance:${n}`);
        }
        this.un = un;
    }

    equals(d: dd) {
        return this.un.value === d.un.value;
    }
}
