const addToDo = require('./utils/addTest');
const getLocalStorage = require('./__mocks__/taskList');

var localStorageList = getLocalStorage();

test('Add an item to task list in dom expected list.length + 1', () => {
  document.body.innerHTML = '<div id="to-do"><ul id="list"></ul></div>';
  const ulList = document.getElementById('list');
  addToDo('new', ulList);
  expect(ulList.children).toHaveLength(localStorageList.length + 1);
});