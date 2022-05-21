import { UnsignedInt } from "./UnsignedInt";

export class yyyy {
    readonly un: UnsignedInt;
    constructor(n: number) {
        const un = new UnsignedInt(n);
        if (un.value < 1) {
            throw new Error(`failed to new yyyy instance:${n}`);
        }
        this.un = un;
    }

    equals(y: yyyy) {
        return this.un.value === y.un.value;
    }
}
