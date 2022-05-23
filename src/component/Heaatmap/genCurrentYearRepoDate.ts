import { RepoDate } from "../../util/RepoDate";

export const genCurrentYearRepoDate = () => {
    let temp = RepoDate.today();
    const yearTemp = [];
    for (let i = 0; i < 365; i++) {
        yearTemp.push(temp);
        temp = temp.prev();
    }

    // 月曜スタートにしたい・・・。
    while (yearTemp[yearTemp.length - 1].day() !== 1) {
        yearTemp.push(temp);
        temp = temp.prev();
    }

    return yearTemp.reverse();
};
