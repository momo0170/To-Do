const images = ['wood.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img'); // img라는 태그를 생성

bgImage.src = `imgs/${chosenImage}`; // img 태그의 src 속성에 내용을 추가
document.body.appendChild(bgImage); // body 요소의 마지막에 생성된 태그(bgImage)를 추가
