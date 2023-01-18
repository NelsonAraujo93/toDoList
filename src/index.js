class ToDoList {
  constructor (list) {
    this.toDoList = list
  }

  addToDo(task) {
    const newTask = {
      description: task,
      completed: false,
      index: 0,
    }
    this.toDoList.unshift(newTask);
    this.update();
  }

  update() {
    this.toDoList.map((item, i) => (
      item.index = i
    ));
  }

  print(container) {
    container.innerHTML = '';
    this.toDoList.map((item) => {
      const toDo = document.createElement('li');
      toDo.className = 'item-to-do';
      toDo.innerHTML = item.description;
      return container.append(toDo);
    });
  }

  clearAllCompleted(container){
    container.innerHTML = '';
    this.toDoList = [];
  }
}

const list = new ToDoList([]);

const init = () => {
  const toDoList = document.getElementById('to-do-list');
  const toDoHeader = document.createElement('div');
  toDoHeader.className = 'to-do-header';
  toDoHeader.innerHTML = `<h4>Today's To Do</h4>
    <div class="icon-container"><img class="icon" src=''></div>
  `;
  toDoList.append(toDoHeader);
  const inputToDo = document.createElement('input');
  const clearAllBtn = document.createElement('div');
  clearAllBtn.className = 'remove-btn';
  clearAllBtn.innerHTML = 'Clear all completed';
  const ulList = document.createElement('ul');
  ulList.id = 'list';
  inputToDo.setAttribute('type', 'text');
  inputToDo.setAttribute('placeholder', 'add to your list...');
  inputToDo.id = 'to-do-input';
  inputToDo.addEventListener('keydown', (event) => {
    if( event.key === 'Enter' ){
      list.addToDo(event.currentTarget.value);
      event.currentTarget.value = '';
      list.print(ulList);
    }
  });
  toDoList.append(inputToDo);
  toDoList.append(ulList);
  list.print(ulList);
  clearAllBtn.addEventListener('click', () => {
    list.clearAllCompleted(ulList);
  })
  toDoList.append(clearAllBtn);
}

init();