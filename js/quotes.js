const quotes = [
  {
    quote:
      '절대 어제를 후회하지 마라. 인생은 오늘의  내 안에 있고 내일은 스스로 만드는것이다',
    author: 'L론허바드',
  },
  {
    quote: '계단을 밟아야 계단 위에 올라설수 있다',
    author: '터키속담',
  },
  {
    quote: '오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다',
    author: '앙드레 말로',
  },
  {
    quote:
      '좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다',
    author: '단테',
  },
  {
    quote: '행복은 습관이다. 그것을 몸에 지니라',
    author: '허버드',
  },
  {
    quote:
      '성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다',
    author: '톰 모나건',
  },
  {
    quote: '자신감 있는 표정을 지으면 자신감이 생긴다',
    author: '찰스다윈',
  },
  {
    quote:
      '네 믿음은 네 생각이 된다 . 네 생각은  네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다',
    author: '간디',
  },
  {
    quote:
      '일하는 시간과 노는 시간을 뚜렷이 구분하라 . 시간의 중요성을 이해하고 매순간을 즐겁게 보내고 유용하게 활용하라',
    author: '루이사 메이올콧',
  },
  {
    quote:
      '절대 포기하지 말라. 당신이 되고 싶은 무언가가 있다면, 그에 대해 자부심을 가져라. 당신 자신에게 기회를 주어라. 스스로가 형편없다고 생각하지 말라. 그래봐야 아무 것도 얻을 것이 없다. 목표를 높이 세워라.인생은 그렇게 살아야 한다',
    author: '마이크 맥라렌',
  },
];

const quote = document.querySelector('#quote span:first-child'); // 명언이 들어갈 span
const author = document.querySelector('#quote span:last-child'); // 작가가 들어갈 span

// Math.floor(a) - a를 내림
// Math.ceil(a) - a를 올림
// Math.round(a) - a를 반올림
// Math.random() - 0부터 1 사이의 수를 반환

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // 0부터 9까지의 수를 무작위로 생성

quote.innerText = todaysQuote.quote; // 명언 span에 랜덤한 명언을 추가
author.innerText = todaysQuote.author; // 작가 span에 랜덤한 작가를 추가
