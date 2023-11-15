import { createTask } from './src/js/createTask';
import { loadTasks } from './src/js/loadTasks';
import './src/style/main.scss';

const taskForm = document.querySelector('#task-form');

window.addEventListener('DOMContentLoaded', loadTasks);
taskForm.addEventListener('submit', createTask);

const taskContainer = document.getElementById('tasks-container');

// Функция для пометки задачи как выполненной
function markTaskAsCompleted(event) {
  const taskElement = event.target.closest('.task');
  if (taskElement) {
    taskElement.classList.add('completed');
  }
}

// Добавляем обработчик события на контейнер задач
taskContainer.addEventListener('click', markTaskAsCompleted);