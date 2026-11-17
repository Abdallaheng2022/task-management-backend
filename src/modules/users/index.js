// Public API of the users module. Other modules import from here,
// never from users.data.js directly.
export { getAllUsers, getUserById, createUser } from './users.service.js';
