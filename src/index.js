import './style.css';
import ToDoList from './toDoList.js';

const ToDoListArray = new ToDoList([]);

const init = () => {
  const toDoList = document.getElementById('to-do-list');
  const toDoHeader = document.createElement('div');
  toDoHeader.className = 'to-do-header';
  toDoHeader.innerHTML = `<h4>Today's To Do</h4>
    <div class="icon-container">
    <?xml version="1.0" encoding="utf-8"?>
    <svg fill="#000000" width="14px" height="14px" viewBox="0 0 24 24" id="update-alt" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line">
      <path id="primary" d="M5.07,8A8,8,0,0,1,20,12" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
      <path id="primary-2" data-name="primary" d="M18.93,16A8,8,0,0,1,4,12" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
      <polyline id="primary-3" data-name="primary" points="5 3 5 8 10 8" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polyline>
      <polyline id="primary-4" data-name="primary" points="19 21 19 16 14 16" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polyline>
    </svg>
    </div>`;
  toDoList.append(toDoHeader);
  const inputToDoContainer = document.createElement('div');
  const inputToDo = document.createElement('input');
  inputToDo.id = 'to-do-input';
  inputToDo.setAttribute('type', 'text');
  inputToDo.setAttribute('placeholder', 'add to your list...');
  const clearAllBtn = document.createElement('div');
  clearAllBtn.classList.add('remove-btn', 'disabled');
  clearAllBtn.id = 'clear-all';
  clearAllBtn.innerHTML = 'Clear all completed';
  const ulList = document.createElement('ul');
  ulList.id = 'list';
  inputToDoContainer.id = 'to-do-input-container';
  inputToDoContainer.innerHTML = `
  <?xml version="1.0" encoding="utf-8"?>
  <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5a1 1 0 1 0-2 0v5.6a3.4 3.4 0 0 1-3.4 3.4H7.414l2.293-2.293a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L7.414 16H14.6a5.4 5.4 0 0 0 5.4-5.4V5Z" fill="#000000"/>
  </svg>`;
  inputToDo.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      ToDoListArray.addToDo(event.currentTarget.value, ulList);
      event.currentTarget.value = '';
    }
  });
  clearAllBtn.addEventListener('click', () => {
    ToDoListArray.clearAllCompleted(ulList);
  });
  inputToDoContainer.prepend(inputToDo);
  toDoList.append(inputToDo);
  toDoList.append(ulList);
  toDoList.append(clearAllBtn);
  ToDoListArray.print(ulList);
};

init();