import removeNode from './remove-task-node.js';
import editTask from './edit-existing-task.js';

const taskNode = (obj) => {
  const newTask = document.createElement('div');
  const newTaskContainer = document.createElement('div');

  const checkMarkInput = document.createElement('input');
  const objDescription = document.createElement('span');
  const taskController = document.createElement('i');

  checkMarkInput.type = 'checkbox';
  objDescription.innerText = `${obj.description}`;
  taskController.classList.add('fa-solid', 'fa-ellipsis-vertical');
  objDescription.classList.add('description');

  newTaskContainer.appendChild(checkMarkInput);
  newTaskContainer.appendChild(objDescription);

  newTask.appendChild(newTaskContainer);
  newTask.appendChild(taskController);

  newTask.dataset.index = obj.index;
  newTask.dataset.completed = obj.completed;
  newTask.classList.add('make-flex');
  // console.log(newTask);

  taskController.addEventListener('click', () => {
    removeNode(obj.index, newTask);
  });

  objDescription.addEventListener('click', () => {
    editTask(objDescription, newTask.dataset.index);
  });

  return newTask;
};

export default taskNode;
