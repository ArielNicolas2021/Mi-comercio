export const DateNow = {
  day: new Date().getDate(),
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
  hour: new Date().getHours(),
  minutes: new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()
}
