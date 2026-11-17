# Task Management Backend Starter

Session 1 assignment: a Node.js project using **ES Modules**, with **Users** and **Tasks** organized as separate modules and simple task operations on **in-memory data**.

No external dependencies; it uses only Node.js built-ins (`node --watch`, `node --test`).

## Requirements

- Node.js 20 or newer (`node -v`)

## Getting started

```bash
git clone https://github.com/<your-username>/task-management-backend.git
cd task-management-backend
npm install     # nothing to install yet, but creates package-lock.json
npm start
```

## npm scripts

| Command       | What it does                                                             |
| ------------- | ------------------------------------------------------------------------ |
| `npm start`   | Runs the app once: `node src/app.js`                                     |
| `npm run dev` | Runs the app and restarts on file changes (`node --watch`)               |
| `npm test`    | Runs all `*.test.js` files with the built-in test runner (`node --test`) |

## Project structure

```
task-management-backend/
├── src/
│   ├── modules/
│   │   ├── users/
│   │   │   ├── users.data.js      # in-memory users array
│   │   │   ├── users.service.js   # user logic (get, create)
│   │   │   └── index.js           # public API of the module
│   │   └── tasks/
│   │       ├── tasks.data.js      # in-memory tasks array
│   │       ├── tasks.service.js   # task logic (create, complete, delete...)
│   │       └── index.js           # public API of the module
│   └── app.js                     # entry point: runs a demo
├── tests/
│   ├── users.test.js
│   └── tasks.test.js
├── .gitignore
├── package.json
└── README.md
```

**Rules the structure follows**

- Each feature (users, tasks) lives in its own folder under `src/modules/`.
- `*.data.js` holds the data; only the module's `*.service.js` reads or changes it.
- Other code imports a module through its `index.js`, e.g. `import { getUserById } from '../users/index.js'`.
- The tasks module uses the users module to check that a task's user exists.

## Task operations

| Function                        | Description                     |
| ------------------------------- | ------------------------------- |
| `getAllTasks()`                 | List all tasks                  |
| `getTaskById(id)`               | Find one task (or `null`)       |
| `getTasksByUser(userId)`        | List a user's tasks             |
| `createTask({ title, userId })` | Add a task; the user must exist |
| `completeTask(id)`              | Mark a task as completed        |
| `deleteTask(id)`                | Remove a task                   |

Users: `getAllUsers()`, `getUserById(id)`, `createUser({ name, email })`.

## Expected output

`npm start` prints the seeded users, creates a user and a task, completes and deletes tasks, then prints:

```
Expected error: User not found: 99
```

Data is in memory only, so it resets every time the app restarts.
