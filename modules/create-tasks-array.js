import NewTaskTemplate from './task-template.js';
import dynamicStorageUpdate from './dynamic-storage-update.js';
import reOrderTasks from './re-order-tasks.js';
import displayNode from './display-task-node.js';
import tasks from './tasks-array-module.js';

export const populateTaskArray = (describe) => {
  dynamicStorageUpdate(tasks);
  const newTaskObject = new NewTaskTemplate(describe);
  tasks.push(newTaskObject);
  reOrderTasks(tasks);
  displayNode(newTaskObject);
  dynamicStorageUpdate(tasks);
};

export default populateTaskArray;
