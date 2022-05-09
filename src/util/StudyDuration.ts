export type StudyDuration = {
    hour: number;
    minute: number;
};

export const fillZeroTwoNumber = (n: number) => (n < 10 ? `0${n}` : n);

const convStudyDurationToMinute = (s: StudyDuration) => {
    return s.hour * 60 + s.minute;
};
const convMinuteToStudyDuration = (m: number): StudyDuration => {
    return { hour: Math.floor(m / 60), minute: m % 60 };
};

export const calcStudyDuration = (
    curr: StudyDuration,
    diff: StudyDuration
): StudyDuration => {
    const minute =
        convStudyDurationToMinute(curr) + convStudyDurationToMinute(diff);
    if (minute < 0) {
        return { hour: 0, minute: 0 };
    }
    return convMinuteToStudyDuration(minute);
};
