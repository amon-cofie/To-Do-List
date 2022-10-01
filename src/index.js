import './style.css';
import tasks from '../modules/tasks-array-module.js';
import { populateTaskArray } from '../modules/create-tasks-array.js';
import displayNode, { toDoList } from '../modules/display-task-node.js';
import dynamicStorageUpdate from '../modules/dynamic-storage-update.js';
import reOrderTasks from '../modules/re-order-tasks.js';

const taskInput = document.querySelector('#add-new-task');
const resetBtn = document.querySelector('#reset-button');
const clearCompleted = document.querySelector('#clr-completed-btn');

tasks.forEach((e) => {
  displayNode(e);
});

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (taskInput.value.length <= 1) {
      return;
    }
    populateTaskArray(taskInput.value);
    taskInput.value = '';
  }
});

resetBtn.addEventListener('click', () => {
  localStorage.clear();
  tasks.splice(tasks[0]);
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.lastChild);
  }
});

clearCompleted.addEventListener('click', () => {
  const filterComplete = tasks.filter((e) => e.completed === false);
  reOrderTasks(filterComplete);
  dynamicStorageUpdate(filterComplete);

  window.location.reload();
});
