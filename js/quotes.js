// Math.floor(a) - a를 내림
// Math.ceil(a) - a를 올림
// Math.round(a) - a를 반올림
// Math.random() - 0부터 1 사이의 수를 반환
const quotes = [
  {
    quote:
      'The road to success and the road to failure are almost exactly the same.',
    author: '– Colin R. Davis',
  },
  {
    quote: 'It is better to fail in originality than to succeed in imitation.',
    author: '– Herman Melville',
  },
  {
    quote:
      'Success is walking from failure to failure with no loss of enthusiasm.',
    author: '– Winston Churchill',
  },
  {
    quote: 'All progress takes place outside the comfort zone.',
    author: '– Michael John Bobak',
  },
  {
    quote:
      'Success usually comes to those who are too busy to be looking for it.',
    author: '– Henry David Thoreau',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: '– Walt Disney',
  },
  {
    quote:
      'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
    author: '– Albert Schweitzer',
  },
  {
    quote:
      'Success seems to be connected with action. Successful people keep moving.',
    author: '– Conrad Hilton',
  },
  {
    quote: 'In order to succeed, we must first believe that we can.',
    author: '– Nikos Kazantzakis',
  },
  {
    quote:
      'The only place where success comes before work is in the dictionary.',
    author: '– Vidal Sassoon',
  },
];

const quote = document.querySelectorAll('.quote span:first-child'); // 명언이 들어갈 span
const author = document.querySelectorAll('.quote span:last-child'); // 작가가 들어갈 span
console.log(author); // 5개의 span이 있는 배열
console.log(quote); // 5개의 span이 있는 배열

// 10개의 명언 중에서 랜덤한 명언 1개를 뽑아서 새로운 배열을 생성한 후, 이를 5번 반복
const newArr = [];
for (i = 0; i < 4; i++) {
  const todaysQuote = quotes.splice(
    Math.floor(Math.random() * quotes.length),
    1
  );
  const value = todaysQuote[0]; // quote, author가 담긴 오브젝트
  newArr.push(value);
  quote[i].innerText = newArr[i].quote;
  author[i].innerText = newArr[i].author;
}
// quote[i].innerText = todaysQuote[0].quote; // 명언 span에 랜덤한 명언을 추가
// author[i].innerText = todaysQuote[0].author; // 작가 span에 랜덤한 작가를 추가
