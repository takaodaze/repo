const colorCodeRegExp = /#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/;

export class ColorCodeError extends Error {
    constructor(code: string) {
        super(`failed to parse color code :'${code}'`);
    }
}

export class ColorCode {
    private code: string;
    constructor(code: string) {
        const isValid = colorCodeRegExp.test(code);
        if (!isValid) {
            throw new ColorCodeError(code);
        }
        this.code = code;
    }

    use() {
        return this.code;
    }
}
