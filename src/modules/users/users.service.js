// Business logic for users. Only this file touches users.data.js.
import { users } from './users.data.js';

let nextId = users.length + 1;

export function getAllUsers() {
  return [...users];
}

export function getUserById(id) {
  return users.find((user) => user.id === id) ?? null;
}

export function createUser({ name, email }) {
  if (!name || !email) {
    throw new Error('Name and email are required');
  }
  if (users.some((user) => user.email === email)) {
    throw new Error(`Email already in use: ${email}`);
  }

  const user = { id: nextId++, name, email };
  users.push(user);
  return user;
}
