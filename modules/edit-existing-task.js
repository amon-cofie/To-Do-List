import tasks from './tasks-array-module.js';
import dynamicStorageUpdate from './dynamic-storage-update.js';

const editTask = (obj, indx) => {
  obj.contentEditable = 'true';
  obj.onkeydown = (event) => {
    if (event.key === 'Enter') {
      obj.contentEditable = 'false';
      tasks.forEach((e) => {
        if (e.index === Number(indx)) {
          e.description = obj.innerText;
        }
      });
      dynamicStorageUpdate(tasks);
    }
  };
};

export default editTask;
