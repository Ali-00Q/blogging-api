# blogging-api

A RESTful API for a blogging platform built with Node.js, Express.js, MongoDB Atlas, and JWT Authentication.

---

## Setup and Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Ali-00Q/blogging-api.git
cd blogging-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

Create a `.env` file in the project root and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the Server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

The API will run on:

```text
http://localhost:5000
```

---

## Implemented Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login and receive a JWT token |

### Posts

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/posts` | Retrieve all posts |
| POST | `/posts` | Create a new post (Authenticated users only) |
| PUT | `/posts/:id` | Update an existing post (Owner only) |
| DELETE | `/posts/:id` | Delete a post (Owner only) |

---

## Authentication

This API uses **JSON Web Tokens (JWT)** for authentication.

Protected routes require the following header:

```http
Authorization: Bearer <token>
```

Users can only update or delete posts that they created.

---

## Database Choice

### MongoDB Atlas

This project uses MongoDB Atlas as the database and Mongoose as the ODM (Object Data Modeling) library.

### Why MongoDB?

MongoDB was selected because:

- It stores data in flexible JSON-like documents.
- It integrates naturally with JavaScript and Node.js applications.
- It allows rapid development without complex relational schemas.
- MongoDB Atlas provides a fully managed cloud database service.
- Mongoose simplifies schema creation, validation, and database operations.

For a blogging platform, MongoDB is a good fit because users and posts can be represented as simple document structures with minimal complexity.

---

## Validation

The project uses express-validator to validate incoming requests.

### User Validation

- Name is required
- Email must be valid
- Password must contain at least 6 characters

### Post Validation

- Title cannot be empty
- Content cannot be empty

---

## Postman Collection

The API can be tested using the following Postman Collection:

https://ali-2b-3308778.postman.co/workspace/d6a9f0b0-898f-4200-883f-e8af4761baa0/documentation/3ba7DeF5c591A0C85BAE75bd

An exported Postman collection is also included in the repository.

---

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- express-validator
- Postman
