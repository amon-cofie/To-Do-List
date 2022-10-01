import removeNode from './remove-task-node.js';
import editTask from './edit-existing-task.js';
import checkCompleted from './check-completed.js';

const taskNode = (obj) => {
  const newTask = document.createElement('div');
  const newTaskContainer = document.createElement('div');

  const checkMarkInput = document.createElement('input');
  const objDescription = document.createElement('span');
  const taskController = document.createElement('i');

  checkMarkInput.type = 'checkbox';
  objDescription.innerText = `${obj.description}`;
  taskController.classList.add(
    'fa-solid',
    'fa-ellipsis-vertical',
    'make-task-controller-accessible',
  );
  objDescription.classList.add('description');

  taskController.onmouseover = () => {
    taskController.classList.remove('fa-solid', 'fa-ellipsis-vertical');
    taskController.classList.add('fa-solid', 'fa-trash');
  };

  taskController.onmouseout = () => {
    taskController.classList.remove('fa-solid', 'fa-trash');
    taskController.classList.add('fa-solid', 'fa-ellipsis-vertical');
  };

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

  objDescription.addEventListener('click', () => {
    editTask(objDescription, newTask.dataset.index);
  });

  checkMarkInput.addEventListener('change', () => {
    checkCompleted(newTask);
  });

  if (obj.completed) {
    checkMarkInput.checked = true;
    objDescription.classList.add('cross-out');
  }

  return newTask;
};

export default taskNode;
