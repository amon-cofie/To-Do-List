const dynamicStorageUpdate = (storeArr) => {
  localStorage.setItem('taskStorageArray', JSON.stringify(storeArr));
};

export default dynamicStorageUpdate;
