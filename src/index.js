import "./style.css";
import tasks, { populateTaskArray } from "../modules/create-tasks-array.js";
import displayNode from "../modules/display-task-node.js";
import { toDoList } from "../modules/display-task-node.js";

const taskInput = document.querySelector("#add-new-task");
const resetBtn = document.querySelector("#reset-button");

tasks.forEach((e) => {
  displayNode(e);
});

console.log("this point works");

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (taskInput.value.length <= 1) {
      alert(
        `I don't think a whole task can be one letter or less in length 😅`
      );
      return;
    }
    populateTaskArray(taskInput.value);
    taskInput.value = "";
  }
});

resetBtn.addEventListener("click", () => {
  localStorage.clear();
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.lastChild);
  }
});
