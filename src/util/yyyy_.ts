import { UnsignedInt } from "./UnsignedInt";

export class yyyy {
    readonly value: number;
    constructor(n: number) {
        const un = new UnsignedInt(n);
        if (un.value < 1) {
            throw new Error(`failed to new yyyy instance:${n}`);
        }
        this.value = n;
    }

    equals(y: yyyy) {
        return this.value === y.value;
    }
}
