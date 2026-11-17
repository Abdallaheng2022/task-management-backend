// Business logic for tasks. Only this file touches tasks.data.js.
import { tasks } from './tasks.data.js';
import { getUserById } from '../users/index.js';

let nextId = tasks.length + 1;

export function getAllTasks() {
  return [...tasks];
}

export function getTaskById(id) {
  return tasks.find((task) => task.id === id) ?? null;
}

export function getTasksByUser(userId) {
  return tasks.filter((task) => task.userId === userId);
}

export function createTask({ title, userId }) {
  if (!title) {
    throw new Error('Title is required');
  }
  if (!getUserById(userId)) {
    throw new Error(`User not found: ${userId}`);
  }

  const task = { id: nextId++, title, userId, completed: false };
  tasks.push(task);
  return task;
}

export function completeTask(id) {
  const task = getTaskById(id);
  if (!task) {
    throw new Error(`Task not found: ${id}`);
  }
  task.completed = true;
  return task;
}

export function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    throw new Error(`Task not found: ${id}`);
  }
  const [removed] = tasks.splice(index, 1);
  return removed;
}
