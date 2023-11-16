import '~/style/_modal.scss';
import { hideModal } from '~components/modal/hideModal';
import { showModal } from '~components/modal/showModal';

export function deleteTask(taskContainer) {
	taskContainer.addEventListener('click', e => {
		const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
		const target = e.target.closest('button');
		const taskElement = target.closest('.task');
		// const taskTitle = taskElement.querySelector('h3').textContent;
		// const taskDescription = taskElement.querySelector('p').textContent;
		if (target.classList.contains('checkmark')) {
			taskElement.classList.toggle('completed');
		}
		if (target.classList.contains('delete')) {
			showModal();
			hideModal();
		}
	});
}
