let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") return;

  tasks.push(task);
  input.value = "";
  addedTasks();
}

function editTask(index) {
  const newTask = prompt("Edit task:", tasks[index]);

  if (newTask !== null && newTask.trim() !== "") {
    tasks[index] = newTask;
    addedTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  addedTasks();
}

function deleteAll() {
  tasks = [];
  addedTasks();
}

function addedTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${task}</span>
      <div class="actions">
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

    list.appendChild(li);
  });
}
