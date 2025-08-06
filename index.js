const TodoContainer = document.querySelector(".todo-container");
const Newtask = document.getElementById("todo-Newtask");
const TaskAddButton = document.getElementById("taskAddButton");
const tasksList = document.querySelector(".tasksList");
const taskCountSpan = document.getElementById("task-count");
const completedTask = document.getElementById("completedTask");

// Update the tasklist count //
function updateTaskCount() {
  const taskCount = tasksList.children.length;
  taskCountSpan.textContent = `You have added ${taskCount} tasks`;
}
function updateCompletedCount() {
  const completedTasks = document.querySelectorAll(".tasksList .completed");
  completedTask.textContent = `Completed: ${completedTasks.length}`;
}

function todolist() {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.classList.add("task-text");
  span.textContent = Newtask.value;

  const actionDiv = document.createElement("div");
  actionDiv.classList.add("task-actions");

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("task-btn", "complete-btn");
  completeBtn.innerHTML = "&#10003;";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("task-btn", "delete-btn");
  deleteBtn.innerHTML = "&#10007;";

  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");

    updateCompletedCount();
  });

  deleteBtn.addEventListener("click", (D) => {
    tasksList.removeChild(li);

    updateTaskCount();
  });

  li.appendChild(span);
  actionDiv.appendChild(completeBtn);
  actionDiv.appendChild(deleteBtn);
  li.appendChild(actionDiv);

  tasksList.appendChild(li);

  updateTaskCount();
}
function handleTask() {
  const TaskText = Newtask.value.trim();
  if (TaskText !== "") {
    todolist();
    Newtask.value = "";
  }
}
TaskAddButton.addEventListener("click", handleTask);
