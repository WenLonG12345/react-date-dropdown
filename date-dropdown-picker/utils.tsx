export const monthByNumber = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const numberByMonth = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

export const unit = {
  day: "day",
  month: "month",
  year: "year",
};

export const getDaysInMonth = (year: number, month: number): number => {
  year = +year;
  month = +month;
  return new Date(year, month, 0).getDate();
};

export const zeroPad = (value: number, places: number) =>
  String(value).padStart(places, "0");
