// import reOrderTasks from "./re-order-tasks.js";
// const toDoList = document.querySelector("#to-do-list");

const taskNode = (obj) => {
  const newTask = document.createElement("div");
  // const separator = document.createElement('hr');
  newTask.innerHTML = `<div> <input type="checkbox" /> <span class="description">${obj.description}</span></div><i class="fa-solid fa-ellipsis-vertical"></i>`;
  newTask.dataset.index = obj.index;
  newTask.dataset.completed = obj.completed;
  newTask.classList.add("make-flex");
  // toDoList.appendChild(newTask);
  // newTask.after(separator);
  return newTask;
};

export default taskNode;
