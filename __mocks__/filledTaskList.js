var newTask = {
  description: 'this is new',
  completed: false,
  index: 0,
};

module.exports = getFilledStorage = () => {
  const localStorage = [];
  localStorage.push(newTask);
  return localStorage;
}