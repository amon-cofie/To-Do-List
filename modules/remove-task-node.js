import tasks from './tasks-array-module.js';
import dynamicStorageUpdate from './dynamic-storage-update.js';
import reOrderTasks from './re-order-tasks.js';

const removeNode = (obj, currNode) => {
  let flag = 0;
  tasks.forEach((e) => {
    if (e.index === obj) {
      flag = tasks.indexOf(e);
      currNode.parentNode.removeChild(currNode.nextSibling);
      currNode.parentNode.removeChild(currNode);
    }
  });
  tasks.splice(flag, 1);
  reOrderTasks(tasks);
  dynamicStorageUpdate(tasks);
};

export default removeNode;
