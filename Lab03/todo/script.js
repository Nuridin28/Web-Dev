"use strict";

const todoList = document.getElementById("todo-list"),
  addButton = document.getElementById("add-button"),
  inputField = document.getElementById("todo-input");

const todosArr = [];

function addTodo() {
  const todo = document.createElement("li");
  const todoContent = document.createElement("div");
  todo.classList.add("todo-item");

  if (inputField.value) {
    todoContent.textContent = inputField.value;
    const check = document.createElement("input");
    const leftPart = document.createElement("div");

    check.type = "checkbox";
    check.classList.add("check-btn");

    check.addEventListener("change", function () {
      if (this.checked) {
        todoContent.classList.add("completed");
      } else {
        todoContent.classList.remove("completed");
      }
    });

    leftPart.appendChild(check);
    leftPart.appendChild(todoContent);
    leftPart.classList.add("left-part");
    todo.appendChild(leftPart);
    todosArr.unshift(todo);
    inputField.value = "";
    console.log(todosArr);
  }

  const del = document.createElement("div");
  const delImg = document.createElement("img");
  delImg.classList.add("del-img");
  delImg.src = "./assets/trash.svg";

  del.appendChild(delImg);
  del.classList.add("del-btn");

  todo.appendChild(del);

  del.addEventListener("click", function () {
    todo.remove();
    const index = todosArr.indexOf(todo);
    todosArr.splice(index, 1);
  });
}

function render() {
  todoList.innerHTML = "";
  todosArr.forEach((todo) => {
    todoList.appendChild(todo);
  });
}
addButton.addEventListener("click", () => {
  addTodo();
  render();
});
