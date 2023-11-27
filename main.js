// Функция, возвращающая новую кнопку
function getButton(text, className, className2) {
  let button = document.createElement('button');
  button.textContent = text;
  button.classList.add(className, className2);
  return button;
}

// Функция, возвращающая новый input
function getInput(placeholder, type, className) {
  let input = document.createElement('input');
  input.type = type;
  input.placeholder = placeholder;
  input.classList.add(className);
  return input;
}

// Функция, возвращающая элемент списка задач
function getTaskLlist(task) {
  let taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  let taskSubtitle = document.createElement('h2');
  taskSubtitle.classList.add('title', 'task-item__title');
  taskSubtitle.textContent = task;

  let actionsBox = document.createElement('div');
  actionsBox.classList.add('task-item__actions');

  let doneBtn = getButton('Выполнено', 'btn', 'task-item__btn');
  doneBtn.classList.add('task-item__btn--green');
  doneBtn.onclick = function () {
    taskItem.classList.add('task-item--active');
    taskSubtitle.classList.add('task-item__title--active');
    removeBtn.classList.add('task-item__btn--active');

    doneBtn.remove();
    editBtn.remove();
  };

  let editBtn = getButton('Изменить', 'btn', 'task-item__btn');
  editBtn.onclick = function () {
    let newTask = prompt('Введите название задачи', taskSubtitle.textContent);
    taskSubtitle.textContent = newTask;
  };

  let removeBtn = getButton('Удалить', 'btn', 'task-item__btn');
  removeBtn.onclick = function () {
    taskItem.remove();
  };

  actionsBox.append(doneBtn, editBtn, removeBtn);
  taskItem.append(taskSubtitle, actionsBox);

  return taskItem;
}

// Блок контейнера
let container = document.createElement('div');
container.classList.add('container');

// Заголовок
let taskTitle = document.createElement('h1');
taskTitle.classList.add('title');
taskTitle.textContent = 'Список задач';

// Блок с  инпутом и кнопкой для вывода задачи
let taskBox = document.createElement('div');
taskBox.classList.add('box-task');

let taskLabel = document.createElement('label');
taskLabel.classList.add('box-task__label');

let taskInput = getInput('Задача', 'text', 'box-task__input');

let taskBtn = getButton('Создать задачу', 'btn', 'box-task__btn');

// Список задач
let taskList = document.createElement('ul');
taskList.classList.add('task-list');

taskLabel.append(taskInput);
taskBox.append(taskLabel, taskBtn);
container.append(taskTitle, taskBox, taskList);

// Добавляем обработчики событий клика кнопкам добавления
taskBtn.onclick = function () {
  let task = taskInput.value;
  console.log(task);

  let newTask = getTaskLlist(task);
  taskList.append(newTask);

  taskInput.value = '';
};

document.body.append(container);
