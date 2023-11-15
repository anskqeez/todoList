// import './src/style/main.scss';

// // Получаем ссылки на необходимые элементы
// const taskForm = document.getElementById('task-form');
// const taskTitleInput = document.getElementById('task-title');
// const taskDescriptionInput = document.getElementById('task-description');
// const taskContainer = document.getElementById('task-container');

// function addTask(event) {
// 	event.preventDefault();

// 	const taskElement = document.createElement('div');
// 	const titleElement = document.createElement('h3');
// 	const descriptionElement = document.createElement('p');

// 	// Получаем значения из полей ввода
// 	const title = taskTitleInput.value;
// 	const description = taskDescriptionInput.value;

// 	if (!title || !description) {
// 		alert('Print task title and description');
// 	}
// 	titleElement.textContent = title;
// 	descriptionElement.textContent = description;
// localStorage.setItem(JSON.stringify(taskDescriptionInput), JSON.stringify(taskDescription));

// 	taskElement.classList.add('task');
// 	taskElement.append(titleElement);
// 	taskElement.append(descriptionElement);

// 	taskContainer.appendChild(taskElement);

// 	taskTitleInput.value = '';
// 	taskDescriptionInput.value = '';
// }
// taskForm.addEventListener('submit', addTask);

// // Функция для удаления задачи
// function deleteTask(event) {
// 	const taskElement = event.target.closest('.task');
// 	if (taskElement) {
// 		taskElement.remove();
// localStorage.removeItem(JSON.stringify(taskDescriptionInput));
// 	}
// }

// // Добавляем обработчик события на контейнер задач
// taskContainer.addEventListener('click', deleteTask);
