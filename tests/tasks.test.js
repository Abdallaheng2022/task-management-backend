import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  getAllTasks,
  getTasksByUser,
  createTask,
  completeTask,
  deleteTask,
} from '../src/modules/tasks/index.js';

test('creates a task for an existing user', () => {
  const task = createTask({ title: 'New task', userId: 1 });
  assert.equal(task.completed, false);
  assert.equal(getTasksByUser(1).length, 2);
});

test('rejects a task without a title or with an unknown user', () => {
  assert.throws(() => createTask({ userId: 1 }), /Title is required/);
  assert.throws(() => createTask({ title: 'x', userId: 99 }), /User not found/);
});

test('marks a task as completed', () => {
  assert.equal(completeTask(2).completed, true);
  assert.throws(() => completeTask(999), /Task not found/);
});

test('deletes a task', () => {
  const before = getAllTasks().length;
  deleteTask(1);
  assert.equal(getAllTasks().length, before - 1);
  assert.throws(() => deleteTask(1), /Task not found/);
});
