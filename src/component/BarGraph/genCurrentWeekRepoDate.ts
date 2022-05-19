import { RepoDate } from "../../util/RepoDate";

export const genCurrentWeekRepoDate = () => {
    let temp = RepoDate.today();
    const weekTemp = [];
    for (let i = 0; i < 7; i++) {
        weekTemp.push(temp);
        temp = temp.prev();
    }
    return weekTemp;
};
