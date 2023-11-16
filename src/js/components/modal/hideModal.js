// import '../style/_modal.scss';
import { hideTask } from '~components/tasks/hideTask';
import { removeFromLS } from '~components/tasks/localStorage/removeFromLS';
export function hideModal() {
	const modalOverlay = document.querySelector('.modal__overlay');
	const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
	if (modalOverlay) {
		modalOverlay.addEventListener('click', e => {
			const target = e.target.closest('button');
			const taskEl = document.querySelector('.task');
			if (taskEl) {
				const taskTitle = taskEl.querySelector('h3').textContent;
				const taskDescription = taskEl.querySelector('p').textContent;
				if (target.classList.contains('modal__ok')) {
					modalOverlay.classList.remove('active');
					hideTask(taskEl);
					removeFromLS(savedTasks, taskTitle, taskDescription);
					return;
				}
			}
			if (
				target.classList.contains('modal__close') ||
				target.classList.contains('modal__delete')
			) {
				modalOverlay.classList.remove('active');
			}
		});
		return;
	}
}
