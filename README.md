# To-Do List Backend (Node.js + MongoDB)

A clean and production-ready backend API for a To-Do List application.
Built using Express, MongoDB, Mongoose, and JWT authentication.

---

## Features

- User Registration & Login
- Hashed Passwords (bcrypt)
- JWT-based Authentication
- Create / Read / Update / Delete Todos
- Each user sees only their own tasks
- Clean MVC folder structure

---

## 📌 API Endpoints

### **Auth**

```
POST /api/auth/register
POST /api/auth/login
```

### **Todos** (require JWT)

```
POST   /api/todos
GET    /api/todos
GET    /api/todos/:id
PUT    /api/todos/:id
DELETE /api/todos/:id
```

Add token in header:

```
Authorization: Bearer <token>
```

---

## 📦 Example Request (POST Register)

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "123456"
}
```

---
