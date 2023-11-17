import { removeFromLS } from '~components/tasks/localStorage/removeFromLS';
import { hideTask } from './hideTask';

export function deleteTask(taskContainer) {
	taskContainer.addEventListener('click', e => {
		const target = e.target.closest('button');
		const taskElement = target?.closest('.task');
		const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
		const taskTitle = taskElement?.querySelector('h3').textContent;
		const taskDescription = taskElement?.querySelector('p').textContent;
		if (target?.classList.contains('checkmark')) {
			taskElement.classList.toggle('completed');
		}
		if (target?.classList.contains('delete')) {
			if (taskElement) {
				hideTask(taskElement);
				removeFromLS(savedTasks, taskTitle, taskDescription);
			}
		}
	});
}
