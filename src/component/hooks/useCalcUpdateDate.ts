import { DATE_UPDATE_HOUR } from "../../constant/constant";

const millSecOfOneDay = 1000 * 60 * 60 * 24;

const calcPrevUpdateDate = () => {
    const temp = new Date();
    const h = temp.getHours();
    if (0 <= h && h < DATE_UPDATE_HOUR) {
        temp.setTime(temp.getTime() - millSecOfOneDay);
    }
    temp.setHours(5);
    temp.setMinutes(0);
    temp.setSeconds(0);
    return temp;
};

const calcNextUpdateDate = () => {
    const temp = new Date();
    const h = temp.getHours();
    if (h >= DATE_UPDATE_HOUR) {
        temp.setTime(temp.getTime() + millSecOfOneDay);
    }
    temp.setHours(5);
    temp.setMinutes(0);
    temp.setSeconds(0);
    return temp;
};

export const useCalcUpdateDate = () => {
    const prevUpdateTiming = calcPrevUpdateDate();
    const nextUpdateTiming = calcNextUpdateDate();
    return {
        prevUpdateTiming,
        nextUpdateTiming,
    };
};
