import { createButton } from '~components/tasks/createBtn';
import {updateNoTasksVisibility} from '~components/tasks/createTask';
const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
export function loadTasks() {
	const tasksContainer = document.querySelector('#tasks-container');

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
	updateNoTasksVisibility();
}

// Сохранение задач в localStorage
export function saveTask(title, description, checkMarkButton, deleteButton) {
	savedTasks.push({ title, description, checkMarkButton, deleteButton });
	localStorage.setItem('tasks', JSON.stringify(savedTasks));
}