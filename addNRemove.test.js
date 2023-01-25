const addToDo = require('./utils/addTest.js');
const removeTest = require('./utils/removeTest.js');
const getFilledStorage = require('./__mocks__/filledTaskList.js');
const getLocalStorage = require('./__mocks__/taskList.js');

const localStorageList = getLocalStorage();
const filledTaskList = getFilledStorage();

test('Add an item to task list in dom expected list.length + 1', () => {
  document.body.innerHTML = '<div id="to-do"><ul id="list"></ul></div>';
  const ulList = document.getElementById('list');
  addToDo('new', ulList);
  expect(ulList.children).toHaveLength(localStorageList.length + 1);
});

test('Remove an item to task list current: 2 in dom expected list.length - 1', () => {
  document.body.innerHTML = '<div id="to-do"><ul id="list"><li id="task-1"></li><li id="task-2"></li></ul></div>';
  const ulList = document.getElementById('list');
  removeTest(0, ulList);
  expect(ulList.children).toHaveLength(filledTaskList.length - 1);
});