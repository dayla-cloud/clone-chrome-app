const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");

  li.appendChild(span);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  // 엔터시 윈도우 기본값 새로고침 해제
  event.preventDefault();
  //   Input 의 value값을 newTodo라고 명명
  const newTodo = toDoInput.value;
  //   새로고침되지 않아 눈에 보이는 Input 에 남은 value값을 비워줌(해당 데이터는 눈에 안보일 뿐 사라지지않음)
  toDoInput.value = "";
  //   눈에 보이지 않게 처리한 value를 함수 paintToDo 인수에 넣어 꾸며줌
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
