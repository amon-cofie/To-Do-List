const reOrderTasks = (arr) => {
  let indexer = 1;
  arr.forEach((e) => {
    e.index = indexer;
    indexer += 1;
  });
};

export default reOrderTasks;
