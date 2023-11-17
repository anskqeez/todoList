import { createTask } from '~components/tasks/createTask';
import { deleteTask } from '~components/tasks/deleteTask';
import { loadTasks } from '~components/tasks/localStorage/loadTasks';
import './src/style/main.scss';

const taskForm = document.querySelector('#task-form');
const taskContainer = document.getElementById('tasks-container');
window.addEventListener('DOMContentLoaded', loadTasks);

taskForm.addEventListener('submit', createTask);

deleteTask(taskContainer);
