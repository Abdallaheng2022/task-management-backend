// Entry point: runs a short demo of the users and tasks modules.
import { getAllUsers, createUser } from './modules/users/index.js';
import {
  getAllTasks,
  getTasksByUser,
  createTask,
  completeTask,
  deleteTask,
} from './modules/tasks/index.js';

console.log('=== Task Management Backend Starter ===\n');

console.log('Users:');
console.table(getAllUsers());

const omar = createUser({ name: 'Omar', email: 'omar@example.com' });
console.log('Created user:', omar);

const newTask = createTask({ title: 'Learn ES Modules', userId: omar.id });
console.log('Created task:', newTask);

console.log('Completed task:', completeTask(newTask.id));

console.log(`\nTasks for ${omar.name}:`);
console.table(getTasksByUser(omar.id));

console.log('Deleted task:', deleteTask(2));

console.log('\nAll tasks:');
console.table(getAllTasks());

// Error handling example: assigning a task to a user that does not exist.
try {
  createTask({ title: 'Ghost task', userId: 99 });
} catch (error) {
  console.log('Expected error:', error.message);
}
