const MONTH = document.querySelector('.month');
const DATE = document.querySelector('.date');
const DAY = document.querySelector('.day');

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const mon = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const today = new Date();
const month = mon[today.getMonth()];
const date = today.getDate();
const day = week[today.getDay()];
console.log(month);
console.log(date);
console.log(day);

MONTH.innerText = month;
DATE.innerText = date;
DAY.innerText = day;
