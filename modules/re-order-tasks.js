const reOrderTasks = (arr) => {
  console.log("do once");
  let indexer = 1;
  arr.forEach((e) => {
    e.index = indexer;
    indexer += 1;
  });
  console.log(arr);
};

export default reOrderTasks;
