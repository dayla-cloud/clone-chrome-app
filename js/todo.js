const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  //   console.dir(event.target.parentElement.innerText); 부모태그의 텍스트(newTodo)
  const li = event.target.parentElement;
  //   부모태그 지워버리기~~~~
  // console.log(typeof li.id); --- li.id 만 하면 string 임.
  li.remove();
  toDos = toDos.filter(restTodo => restTodo.id !== parseInt(li.id));
  saveToDos();
}
// 질문 : const li  는 두 번 명명됐는데 어떻게 따로 실행될 수 있는걸까?
// 답 : 해당 변수는 자신이 속한 함수가 실행되고 끝날때 만들어지고 사라지므로.
// 반대로 말하면 함수가 실행되고나면 사라졌으면 하는 변수는 그 안에 넣으면 된다는건가!!?? 개신기

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// parse '[value array]'

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos; //toDos = "todos"의 array  ['a','b','c']
  parseToDos.forEach(paintToDo);
}

// arr filter 는 item을 지우는게 아니라 제외하는거! not delete, yes exclude!
// 우리가 지우고 싶은(결국 제외되는거지만) 아이템을 뺀 나머지로 new array를 뱉어내!

// 섹쉬필터가 항상 참이고 참이면 배열을 불러오게하고,
// 이때 우리는 제외하고 싶은 아이템을 거짓으로 하면 됨.
// return !===3 : 3이 아닌 것만 리턴하라
// return x >= 1000 : 1000이상인 것만 리턴하라
//[1,2,3,4].filter(sexyFilter) === sexyFilter(1),sexyFilter(2),sexyFilter(3),sexyFilter(4)
// function sexyFilter(item) {return item!== x}
// === const arr =[],const newArr=[arr.filter(item => item !== x)]

//(인수){함수내용} === 인수 => 함수내용
