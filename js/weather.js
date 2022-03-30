const API_KEY = 'dd003e7bfc4b6d1bdbc660ceb23b3be9';

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(lat);
  console.log(lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => {
      const weather = document.querySelector(
        '.main-screen__column--regionAndweather .weather'
      );
      const city = document.querySelector(
        '.main-screen__column--regionAndweather .region'
      );
      const temp = document.querySelector(
        '.main-screen__column--regionAndweather .temperture'
      );
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = ` / ${Math.round(data.main.temp)} °C`;
    }); // JS가 url을 부름
}

function onGeoError() {
  alert('위치를 찾을 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
