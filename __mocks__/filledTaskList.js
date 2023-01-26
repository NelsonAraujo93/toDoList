const newTask = {
  description: 'this is new',
  completed: false,
  index: 0,
};

const seconTask = {
  description: 'this is new',
  completed: false,
  index: 1,
};

const getFilledStorage = () => {
  const localStorage = [];
  localStorage.push(newTask);
  localStorage.push(seconTask);
  return localStorage;
};

module.exports = getFilledStorage;