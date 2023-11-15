import { createTask } from './src/js/createTask';
import { deleteTask } from './src/js/deleteTask';
import { loadTasks } from './src/js/loadTasks';
import './src/style/main.scss';

const taskForm = document.querySelector('#task-form');

window.addEventListener('DOMContentLoaded', loadTasks);
taskForm.addEventListener('submit', createTask);

const taskContainer = document.getElementById('tasks-container');

deleteTask(taskContainer);
