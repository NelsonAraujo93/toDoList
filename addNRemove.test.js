const addToDo = require('./utils/addTest');
const removeTest = require('./utils/removeTest');
const getFilledStorage = require('./__mocks__/filledTaskList');
const getLocalStorage = require('./__mocks__/taskList');

var localStorageList = getLocalStorage();
var filledTaskList = getFilledStorage();

test('Add an item to task list in dom expected list.length + 1', () => {
  document.body.innerHTML = '<div id="to-do"><ul id="list"></ul></div>';
  const ulList = document.getElementById('list');
  addToDo('new', ulList);
  expect(ulList.children).toHaveLength(localStorageList.length + 1);
});

test('Remove an item to task list in dom expected list.length - 1', () => {
  document.body.innerHTML = '<div id="to-do"><ul id="list"><li id="task-1"></li></ul></div>';
  const ulList = document.getElementById('list');
  removeTest(0, ulList);
  expect(ulList.children).toHaveLength(filledTaskList.length - 1);
});