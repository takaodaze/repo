export type WorkDuration = {
    hour: number;
    minute: number;
};

export const fillZeroTwoNumber = (n: number) => (n < 10 ? `0${n}` : n);

export const convWorkDurationToMinute = (s: WorkDuration) => {
    return s.hour * 60 + s.minute;
};
const convMinuteToWorkDuration = (m: number): WorkDuration => {
    return { hour: Math.floor(m / 60), minute: m % 60 };
};

export const calcWorkDuration = (
    curr: WorkDuration,
    diff: WorkDuration
): WorkDuration => {
    const minute =
        convWorkDurationToMinute(curr) + convWorkDurationToMinute(diff);
    if (minute < 0) {
        return { hour: 0, minute: 0 };
    }
    return convMinuteToWorkDuration(minute);
};
