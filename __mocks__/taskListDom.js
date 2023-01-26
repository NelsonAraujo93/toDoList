const domContainer = () => {
  document.body.innerHTML = `<div id="to-do">
    <ul id="list">
      <li id="task-1">
        <input id='check-1' type='checkbox' checked></input>
        <input id='text-1' type='text' value='this is a new'></input>
      </li>
      <li id="task-2">
        <input id='check-2' type='checkbox'></input>
        <input id='text-2' type='text' value='this is a second new'></input>
      </li>
    </ul>
  </div>`;
  const ulList = document.getElementById('list');
  return ulList;
};

module.exports = domContainer;