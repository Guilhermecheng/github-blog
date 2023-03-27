export function calcHowMuchTimeHasPassed(time: string) {
    const today = new Date();
    const createdDate = new Date(time);
    let difference = today.getTime() - createdDate.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

    return TotalDays;
}