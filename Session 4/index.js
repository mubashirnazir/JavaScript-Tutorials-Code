const taskInput = document.getElementById('text');
const button = document.getElementById('button');
const taskList = document.getElementById('taskLists')

button.addEventListener('click', () => {
  const task = document.createElement('li');
  task.innerText = taskInput.value;

  taskList.appendChild(task)
})