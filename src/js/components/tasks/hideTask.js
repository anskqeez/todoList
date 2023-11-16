import { updateNoTasksVisibility } from './createTask';
export function hideTask(taskEl) {
	if (taskEl) {
		taskEl.classList.add('deleted');
		taskEl.addEventListener('transitionend', () => {
			taskEl.remove();
			updateNoTasksVisibility();
		});
	}
	return;
}
