import { createButton } from './createBtn';
import { saveTask } from './localStorage/loadTasks';
const tasksContainer = document.querySelector('#tasks-container');
const noTasks = document.querySelector('.no__tasks');
export function createTask(event) {
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
	taskContainer.append(taskTitle);
	taskContainer.append(taskDesc);
	const checkMarkBtn = createButton(taskContainer, 'checkmark');
	const deleteBtn = createButton(taskContainer, 'delete');
	tasksContainer.append(taskContainer);
	// Сохранение задач в localStorage
	saveTask(formTitleValue, formDescValue, checkMarkBtn, deleteBtn);
	clearFields(formTitle, formDesc);
	updateNoTasksVisibility();
}

export function clearFields(firstField, secondField) {
	firstField.value = '';
	secondField.value = '';
}

export function updateNoTasksVisibility() {
	const tasks = tasksContainer.querySelectorAll('.task');
	if (tasks.length > 0) {
	  noTasks.classList.add('hidden');
	} else {
	  noTasks.classList.remove('hidden');
	}
  }