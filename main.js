import { createTask, updateNoTasksVisibility } from '~components/tasks/createTask';
import { deleteTask } from '~components/tasks/deleteTask';
import { loadTasks } from '~components/tasks/localStorage/loadTasks';
// import { showModal } from './src/js/modal';
import './src/style/main.scss';

const taskForm = document.querySelector('#task-form');
const taskContainer = document.getElementById('tasks-container');
// const deleteBtn = document.querySelector('.delete');

window.addEventListener('DOMContentLoaded', loadTasks);
document.addEventListener('DOMContentLoaded', updateNoTasksVisibility);
taskForm.addEventListener('submit', createTask);

deleteTask(taskContainer);
