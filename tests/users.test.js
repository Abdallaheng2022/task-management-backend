import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getAllUsers, getUserById, createUser } from '../src/modules/users/index.js';

test('returns the seeded users', () => {
  assert.equal(getAllUsers().length, 2);
});

test('finds a user by id, or returns null', () => {
  assert.equal(getUserById(1).name, 'Ahmed');
  assert.equal(getUserById(999), null);
});

test('creates a user with a new id', () => {
  const user = createUser({ name: 'Test', email: 'test@example.com' });
  assert.equal(user.id, 3);
  assert.deepEqual(getUserById(3), user);
});

test('rejects missing fields and duplicate emails', () => {
  assert.throws(() => createUser({ name: 'No email' }), /required/);
  assert.throws(
    () => createUser({ name: 'Dup', email: 'ahmed@example.com' }),
    /already in use/,
  );
});
