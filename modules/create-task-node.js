const toDoList = document.querySelector('#to-do-list');

const taskNode = (arr) => {
  arr.forEach((e) => {
    const newTask = document.createElement('div');
    const separator = document.createElement('hr');
    newTask.innerHTML = `<div> <input type="checkbox" /> <span class="description">${e.description}</span></div><i class="fa-solid fa-ellipsis-vertical"></i>`;
    newTask.dataset.index = e.index;
    newTask.dataset.completed = e.completed;
    newTask.classList.add('make-flex');
    toDoList.appendChild(newTask);
    newTask.after(separator);
  });
};

export default taskNode;
