// In-memory data store for tasks.
// Data lives only while the process runs; it resets on every restart.
export const tasks = [
  { id: 1, title: 'Set up Node.js project', userId: 1, completed: true },
  { id: 2, title: 'Write README', userId: 2, completed: false },
];
