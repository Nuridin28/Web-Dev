"use strict";

const todoList = document.getElementById("todo-list"),
    doneList = document.getElementById("done-list"),
    addButton = document.getElementById("add-button"),
    inputField = document.getElementById("todo-input"),
    todoCount = document.querySelector('#todo-count'),
    doneCount = document.querySelector('#done-count'),
    resetBtn = document.querySelector('#reset-btn')

const todosArr = [];

let done = [];


resetBtn.addEventListener('click', () => {
    done = []
    render()
    resetBtn.classList.add('hidden')
})

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
                const index = todosArr.indexOf(todo);

                const text = todosArr[index].textContent

                const doneItem = document.createElement("div")
                doneItem.textContent = text
                doneItem.classList.add("done-item")
                if (done.length === -1) {
                    resetBtn.classList.add('hidden')
                } else {
                    resetBtn.classList.remove('hidden')
                }

                done.push(doneItem)

                todosArr.splice(index, 1);
                render()
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
        render()
    });
}

function render() {
    todoList.innerHTML = "";
    todosArr.forEach((todo) => {
        todoList.appendChild(todo);
    });
    todoCount.textContent = todosArr.length + ''

    doneList.innerHTML = "";
    done.forEach((done) => {
        doneList.appendChild(done);
    })

    doneCount.textContent = done.length + ''
}

addButton.addEventListener("click", () => {
    addTodo();
    render();
});
