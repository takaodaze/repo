import { UnsignedInt } from "./UnsignedInt";

export class dd {
    readonly value: number;
    constructor(n: number) {
        const un = new UnsignedInt(n);
        if (un.value < 1 || un.value > 31) {
            throw new Error(`failed to new dd instance:${n}`);
        }
        this.value = n;
    }
}
