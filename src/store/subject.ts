import { atom } from "recoil";
import { ColorCode } from "../util/ColorCode";

export type Subject = {
    id: number;
    name: string;
    color: ColorCode;
};

export const subjectListState = atom<Subject[]>({
    key: "subjectList",
    default: [
        { id: 1, name: "英語", color: new ColorCode("#000") },
        { id: 2, name: "数学", color: new ColorCode("#333") },
        { id: 3, name: "コンピュータサイエンス", color: new ColorCode("#888") },
        { id: 4, name: "作曲", color: new ColorCode("#fff") },
    ],
});
