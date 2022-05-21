export const fillZeroUnderTen = (n: number) => {
    const abs = Math.abs(n);
    const nn = abs < 10 ? `0${abs}` : `${abs}`;
    if (n < 0) {
        return `-${nn}`;
    }
    return nn;
};
