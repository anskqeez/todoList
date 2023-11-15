
export function deleteTask(e) {
    const taskElement = e.target.closest('.task');
    if(taskElement) {
        taskElement.remove();
    }
}
