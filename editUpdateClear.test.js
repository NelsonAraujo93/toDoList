const { endsWith } = require('lodash');
const Task = require('./utils/addNRemove.js');
const getFilledStorage = require('./__mocks__/filledTaskList.js');
const domContainer = require('./__mocks__/taskListDom.js');

const filledTaskList = getFilledStorage();

describe('TaskList', () => {
  const task = new Task(filledTaskList);
  const ulList = domContainer();

  test('Modify the li checkbox from false to true', () => {
    task.complete(1, ulList);
    expect(document.getElementById("to-do-1").checked).toBe(true);
  });
  test('Modify the description value', () => {
    task.edit(1,ulList);
    expect(document.getElementById("text-1").value ).toBe('New text')

  });
  

});