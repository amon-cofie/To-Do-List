import tasks from './tasks-array-module.js';
import dynamicStorageUpdate from './dynamic-storage-update.js';

const checkCompleted = (nod) => {
  const checker = nod.querySelector('input');

  const indexHolder = Number(nod.dataset.index);
  const descriptionHolder = nod.querySelector('.description');

  if (checker.checked) {
    nod.dataset.completed = true;
    tasks.forEach((e) => {
      if (e.index === indexHolder) {
        e.completed = true;
      }
    });
    descriptionHolder.classList.add('cross-out');
  } else {
    nod.dataset.completed = false;
    tasks.forEach((e) => {
      if (e.index === indexHolder) {
        e.completed = false;
      }
    });
    descriptionHolder.classList.remove('cross-out');
  }
  dynamicStorageUpdate(tasks);
};

export default checkCompleted;
