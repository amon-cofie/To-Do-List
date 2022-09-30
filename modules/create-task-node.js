import removeNode from './remove-task-node.js';

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
  taskController.addEventListener('click', () => {
    removeNode(obj.index, newTask);
  });

  return newTask;
};

export default taskNode;
