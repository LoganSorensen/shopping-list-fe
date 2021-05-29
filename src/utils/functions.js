const daysOfTheWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

export const formatDate = (date) => {
  return `${daysOfTheWeek[date[0]]} ${date[1]}.${date[2]}.${date[3]}`;
};
