export const dateToDateTimeString = (date: Date) => {
    console.log(date);

    const yyyy = date.getFullYear();
    const month = date.getMonth() + 1;

    const MM = month < 10 ? `0${month}` : month;
    const date_ = date.getDate();
    const dd = date_ < 10 ? `0${date_}` : date_;
    const hours = date.getHours();
    const hh = hours < 10 ? `0${hours}` : hours;
    const minutes = date.getMinutes();
    const mm = minutes < 10 ? `0${minutes}` : minutes;

    const fmtString = `${yyyy}-${MM}-${dd}T${hh}:${mm}`;
    return fmtString;
};
