"use strict";

const dateFormat = function (date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const newDate = date.split("-");
  return `${months[+newDate[1] - 1]} ${newDate[2]}, ${newDate[0]}`;
};

export default dateFormat;
