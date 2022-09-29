import NewTaskTemplate from "./task-template.js";
import dynamicStorageUpdate from "./dynamic-storage-update.js";
import reOrderTasks from "./re-order-tasks.js";
import displayNode from "./display-task-node.js";

const tasks = JSON.parse(localStorage.getItem("taskStorageArray")) || [];

export const populateTaskArray = (describe) => {
  const newTaskObject = new NewTaskTemplate(describe);
  tasks.push(newTaskObject);
  displayNode(newTaskObject);
  reOrderTasks(tasks);
  dynamicStorageUpdate(tasks);
};

export default tasks;
