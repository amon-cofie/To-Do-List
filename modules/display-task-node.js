import taskNode from './create-task-node.js';

export const toDoList = document.querySelector('#to-do-list');

const displayNode = (obj) => {
  const separator = document.createElement('hr');
  const taskReturn = taskNode(obj);
  toDoList.appendChild(taskReturn);
  taskReturn.after(separator);
};

export default displayNode;
