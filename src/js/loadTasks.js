import { createButton } from '../../index';

export function loadTasks() {
	const tasksContainer = document.querySelector('#tasks-container');
	const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

	for (const task of savedTasks) {
		const taskContainer = document.createElement('div');
		taskContainer.classList.add('task');

		const taskTitle = document.createElement('h3');
		const taskDesc = document.createElement('p');
		const checkMarkButton = createButton(taskContainer, 'checkmark');
		const deleteButton = createButton(taskContainer, 'delete');

		taskTitle.textContent = task.title;
		taskDesc.textContent = task.description;

		taskContainer.append(taskTitle);
		taskContainer.append(taskDesc);
		tasksContainer.append(taskContainer);
	}
}

// Сохранение задач в localStorage
export function saveTask(title, description, checkMarkButton, deleteButton) {
	const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
	savedTasks.push({ title, description, checkMarkButton, deleteButton });
	localStorage.setItem('tasks', JSON.stringify(savedTasks));
}
