const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');
let toDos = [];

const TODOS_KEY = 'todos';

function paintToDo(newTodo) {
  const li = document.createElement('li'); // li 태그를 생성
  li.id = newTodo.id;
  const span = document.createElement('span'); //  span 태그를 생성
  span.innerText = newTodo.text; // span 태그의 내용에 입력한 값을 추가
  const button = document.createElement('button'); // button 태그를 생성
  button.innerText = 'X'; // button 태그의 내용에 추가
  // 버튼에 클릭 이벤트가 발생하면
  button.addEventListener('click', (event) => {
    const li = event.target.parentElement; // 클릭이 이벤트가 발생한 특정 버튼을 찾고, 그 버튼의 부모 요소를 li에 저장
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // localStorage에 있는 id와 li.id가 다르면 남겨둔다.
    li.remove(); // li 제거
    saveToDos();
  });

  li.appendChild(span); // li 태그 안에 span 태그를 넣음
  li.appendChild(button); // li 태그 안에 button 태그를 넣음
  todoList.appendChild(li); // ul 태그 안에 li 태그를 넣음
}

// array 형태인 toDos를 string으로 변환하는 함수
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // toDos 배열을 string으로 변환
}

// todoInput.addEventListener('focus', () => {

// });

todoForm.addEventListener('submit', (event) => {
  event.preventDefault(); // submit 이벤트의 기본 동작을 수행하지 않음
  const newTodo = todoInput.value; // input에 입력한 값을 newTodo에 저장
  todoInput.value = ''; // input에 적었던 값을 지워줌
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // toDos array에 입력한 값을 추가
  paintToDo(newTodoObj);
  saveToDos(); // array 형태인 toDos를 string으로 변환하는 함수
});

const savedToDos = localStorage.getItem(TODOS_KEY); // localStorage에서 "todos"라는 키의 값을 가져옴

// localStorage가 비어있지 않을 경우
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // string을 array로 변환
  // console.log(parsedToDos); // ['a', 'b', 'c', 'd'] 이런 식의 배열을 출력
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
