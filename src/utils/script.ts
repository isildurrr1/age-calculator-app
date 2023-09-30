import { IDate } from "../types/types";

const AgeCalc = (usersDate: IDate) => {
  const date = new Date();
  let todayDay = date.getDate();
  let todayMonth = 1 + date.getMonth();
  let todayYear = date.getFullYear();
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (usersDate.days > todayDay) {
    todayDay = todayDay + month[todayMonth - 1];
    todayMonth = todayMonth - 1;
  }
  if (usersDate.months > todayMonth) {
    todayMonth = todayMonth + 12;
    todayYear = todayYear - 1;
  }
  return {
    days: todayDay - usersDate.days,
    months: todayMonth - usersDate.months,
    years: todayYear - usersDate.years,
  };
}

export default AgeCalc;
