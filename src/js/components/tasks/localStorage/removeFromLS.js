export function removeFromLS(tasksEl, taskT, taskDescr) {
	const tasks = tasksEl.filter(savedTask => {
		return savedTask.title !== taskT || savedTask.description !== taskDescr;
	});
	localStorage.setItem('tasks', JSON.stringify(tasks));
}
