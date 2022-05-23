import { RepoDate } from "../../util/RepoDate";

export const genCurrentRepoDate = (n: number) => {
    let temp = RepoDate.today();
    const weekTemp = [];
    for (let i = 0; i < n; i++) {
        weekTemp.push(temp);
        temp = temp.prev();
    }
    return weekTemp;
};
