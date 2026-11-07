# Social Network

A full-stack social networking project featuring user accounts, posts, profiles, and real-time messaging.

> **Project status:** Earlier personal project built with an older React and Node.js stack. This repository is shared as a portfolio example, not as a production-ready application.

## Tech stack

- **Frontend:** React 17, React Router 5, Material-UI, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Real-time messaging:** Socket.IO
- **Other tooling:** Multer for image uploads and a Postman API collection

## Features

- Registration and login views
- User profiles and a social feed
- Conversations and messaging
- Real-time message delivery through WebSockets
- Image-upload endpoint

## Project structure

```text
.
├── api/                         # Express API, MongoDB models, routes, Socket.IO
├── client/                      # React application
└── Social.postman_collection.json
```

## Run locally

You will need Node.js, a running MongoDB instance, and the package manager appropriate for each folder.

1. Clone the repository.
2. In `api/`, install dependencies and configure a local `.env` with `MONGO_URL` pointing to your MongoDB instance. Never commit database credentials.
3. Start the API with `npm start`. The Express API listens on port **8800** and Socket.IO listens on port **8900**.
4. In another terminal, install dependencies in `client/` and run `npm start`. The React dev server defaults to **http://localhost:3000**.

**Note:** The code uses historical dependencies and assumptions about local ports. Modern Node.js versions may require dependency updates.

## API areas

The Express application contains routes for `auth`, `users`, `posts`, `messages`, and `conversations`. A Postman collection is available at the repository root to help explore requests.

## Engineering notes / future improvements

This is an earlier learning project. Before public deployment, I would prioritize:

- Updating dependencies and adding repeatable automated tests
- Hardening authorization and input validation for API endpoints and Socket.IO events
- Handling offline recipients safely, and improving error handling for messaging
- Restricting upload file types and names, and adding upload-size limits
- Making all development ports and frontend origins configurable

## Author

[Aymen Ouerghui](https://github.com/aymenouer)
