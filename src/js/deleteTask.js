export function deleteTask(taskContainer) {
	taskContainer.addEventListener('click', e => {
		const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
		const target = e.target.closest('button');
		const taskElement = target.closest('.task');
		const taskTitle = taskElement.querySelector('h3').textContent;
		const taskDescription = taskElement.querySelector('p').textContent;
		if (target.classList.contains('checkmark')) {
			taskElement.classList.toggle('completed');
		}
		if (target.classList.contains('delete')) {
			taskElement.classList.add('deleted');
			taskElement.addEventListener('transitionend', () => {
				taskElement.remove();
				const updatedTasks = savedTasks.filter(savedTask => {
					return (
						savedTask.title !== taskTitle || savedTask.description !== taskDescription
					);
				});
				localStorage.setItem('tasks', JSON.stringify(updatedTasks));
			});
		}
	});
}
