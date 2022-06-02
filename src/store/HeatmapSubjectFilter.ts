import { atom, DefaultValue, selector } from "recoil";
import { Subject, userState } from "./user";

const heatmapSubjectFilterAtom = atom<Subject["id"] | null>({
    key: "subject",
    default: null,
});

export const heatmapSubjectFilterSelector = selector<Subject["id"] | null>({
    key: "heatmapSubjectFilterSelector",
    get: ({ get }) => {
        return get(heatmapSubjectFilterAtom);
    },
    set: ({ set }, newValue) => {
        if (newValue == null || newValue instanceof DefaultValue) {
            set(heatmapSubjectFilterAtom, null);
        }

        set(heatmapSubjectFilterAtom, newValue);
    },
});

export const heatmapSubjectfilteredWorkRecord = selector({
    key: "heatmapSubjectfilteredWorkRecord",
    get: ({ get }) => {
        const filter = get(heatmapSubjectFilterAtom);
        const workRecordList = get(userState).workRecordList;

        if (filter == null) {
            return workRecordList;
        }

        return workRecordList.filter((w) => w.subjectId === filter);
    },
});
