import { UnsignedInt } from "./UnsignedInt";

export class MM {
    readonly un: UnsignedInt;
    constructor(n: number) {
        const un = new UnsignedInt(n);
        if (un.value < 1 || un.value > 12) {
            throw new Error(`failed to new MM instance:${n}`);
        }
        this.un = un;
    }

    equals(m: MM) {
        return this.un.value === m.un.value;
    }
}
