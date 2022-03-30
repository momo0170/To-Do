const clockHour = document.querySelector('.clock__hours');
const clockMinute = document.querySelector('.clock__minutes');

// interval : 간격, 일정 시간마다 무슨 일이 일어나게 하고 싶을 때

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  clockHour.innerText = `${hours}`;
  clockMinute.innerText = `${minutes}`;
}

getClock();
setInterval(getClock, 1000);
