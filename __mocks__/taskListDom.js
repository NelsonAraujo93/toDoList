const domContainer = () => {
  document.body.innerHTML = '<div id="to-do"><ul id="list"><li id="task-1"></li><li id="task-2"></li></ul></div>';
  const ulList = document.getElementById('list');
  return ulList;
};

module.exports = domContainer;