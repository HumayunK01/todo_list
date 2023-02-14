const taskList = document.getElementById("taskList");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskInput = document.querySelector(".task-input");

const todos = {
  // 'id1': {
  //   name: 'Task A',
  //   isDone: false
  // },
  // 'id2': {
  //   name: 'Task B',
  //   isDone: true
  // },
  // 'id3': {
  //   name: 'Task C',
  //   isDone: true
  // }
};

let count = 1;

function renderToDos() {
  let output = "";

  for (const todo in todos) {
    // console.log(todos.todo) ❌
    // console.log(todos[todo])
    output += `
          <li class="task ${todos[todo].isDone ? "done" : ""}"" id="${todo}">
            <label>${todos[todo].name}</label>
            <button class="delete-task-btn">Delete</button>
          </li>
        `;
  }

  taskList.innerHTML = output;
}

addTaskBtn.addEventListener("click", function () {
  let id = "id" + count;

  todos[id] = {
    name: taskInput.value,
    isDone: false,
  };
  taskInput.value = "";

  renderToDos();

  count++;
});
taskList.addEventListener("click", function (e) {
  let nodeName = e.target.nodeName;
  let id = e.target.id;
  console.log(id, nodeName);
  if (nodeName === "BUTTON") {
    id = e.target.closest("li").id;
    delete todos[id];
  } else {
    todos[id].isDone = !todos[id].isDone;
  }
  renderToDos();
});

// todos.id1.name
// todos['id1'].name

// todos.todo

// var stds = [
//   {
//     name: 'Akash',
//     marks: 80
//   },
//   {
//     name: 'Bhim',
//     marks: 90
//   }
// ]
// stds[0].name
