import { createButton } from './createBtn';
import { saveTask } from './loadTasks';

export function createTask(event) {
	const tasksContainer = document.querySelector('#tasks-container');
	event.preventDefault();
	const formTitle = document.querySelector('#form-title');
	const formDesc = document.querySelector('#form-description');
	const taskContainer = document.createElement('div');

	taskContainer.classList.add('task');
	const formTitleValue = formTitle.value;
	const formDescValue = formDesc.value;
	const taskTitle = document.createElement('h3');
	const taskDesc = document.createElement('p');

	taskTitle.textContent = formTitleValue;
	taskDesc.textContent = formDescValue;
	taskContainer.appendChild(taskTitle);
	taskContainer.appendChild(taskDesc);

	const checkMarkBtn = createButton(taskContainer, 'checkmark');
	const deleteBtn = createButton(taskContainer, 'delete');
	tasksContainer.appendChild(taskContainer);
	// Сохранение задач в localStorage
	saveTask(formTitleValue, formDescValue, checkMarkBtn, deleteBtn);
	clearFields(formTitle, formDesc);
}

export function clearFields(firstField, secondField) {
	firstField.value = '';
	secondField.value = '';
}
