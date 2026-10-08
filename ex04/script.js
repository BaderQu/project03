const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");

let totalTasks = 0;

function updateCounter() {
  counter.textContent = totalTasks;
}

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    return;
  }

  const li = document.createElement("li");

  const label = document.createElement("span");
  label.textContent = text;
  label.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    li.remove();
    totalTasks--;
    updateCounter();
  });

  li.appendChild(label);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  totalTasks++;
  updateCounter();

  taskInput.value = "";
  taskInput.focus();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
