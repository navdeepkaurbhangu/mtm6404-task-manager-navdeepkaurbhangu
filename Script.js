let selectedList = null;

// Function to add a new list
function addList() {
  const listName = document.getElementById('new-list').value;
  if (listName) {
    const listItem = document.createElement('li');
    listItem.textContent = listName;
    listItem.onclick = function() {
      showTasksForList(listName);
    };
    document.getElementById('list-view').appendChild(listItem);
    document.getElementById('new-list')
}}
