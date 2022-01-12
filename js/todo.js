const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}
function deleteToDo(event) {
  //   console.dir(event.target.parentElement.innerText); 부모태그의 텍스트(newTodo)
  const li = event.target.parentElement;
  //   부모태그 지워버리기~~~~
  li.remove();
}
// 질문 : const li  는 두 번 명명됐는데 어떻게 따로 실행될 수 있는걸까?
// 답 : 해당 변수는 자신이 속한 함수가 실행되고 끝날때 만들어지고 사라지므로.
// 반대로 말하면 함수가 실행되고나면 사라졌으면 하는 변수는 그 안에 넣으면 된다는건가!!?? 개신기

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
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
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
