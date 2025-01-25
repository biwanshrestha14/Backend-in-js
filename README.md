# Node.js Learning Journey

Welcome to my Node.js learning journey! This README serves as a roadmap to understand and practice key concepts of Node.js. Follow along to master backend development using Node.js.

## Table of Contents

1. [Understanding Node.js](#understanding-nodejs)
2. [Node.js Installation](#nodejs-installation)
3. [Exploring Basics of Node.js](#exploring-basics-of-nodejs)
   - [Inbuilt Modules](#inbuilt-modules)
   - [Creating an HTTP Server](#creating-an-http-server)
4. [Network Fundamentals for Web](#network-fundamentals-for-web)
5. [Routing in HTTP Server](#routing-in-http-server)
6. [Using Nodemon](#using-nodemon)
7. [Exploring Express Framework](#exploring-express-framework)
8. [Understanding the Concept of API](#understanding-the-concept-of-api)
9. [API Testing Using Thunder Client](#api-testing-using-thunder-client)
10. [Exploring the Concept of Middleware](#exploring-the-concept-of-middleware)
11. [Database Concepts](#database-concepts)
    - [SQL, NoSQL, and DBMS Explained](#sql-nosql-and-dbms-explained)
    - [Working with SQL Database](#working-with-sql-database)
12. [Understanding .env File](#understanding-env-file)
13. [Exploring Sequelize ORM](#exploring-sequelize-orm)
14. [MVC Design Pattern](#mvc-design-pattern)
15. [Concepts of Migration and Seeding](#concepts-of-migration-and-seeding)

---

## 1. Understanding Node.js
- Node.js is a runtime environment that allows you to run JavaScript on the server side.
- Built on the V8 engine, it is designed to build scalable, high-performance applications.
- Key Features:
  - Asynchronous and event-driven.
  - Non-blocking I/O.
  - Single-threaded with an event loop.

---

## 2. Node.js Installation
1. Download and install Node.js from [Node.js official site](https://nodejs.org/).
2. Verify installation:
   ```bash
   node -v
   npm -v
   ```
3. Initialize a project:
   ```bash
   mkdir my-nodejs-project
   cd my-nodejs-project
   npm init -y
   ```

---

## 3. Exploring Basics of Node.js

### Inbuilt Modules
- Learn about built-in modules such as `fs`, `os`, and `path`.
- Example:
  ```javascript
  const fs = require('fs');
  console.log(fs.readdirSync('.'));
  ```

### Creating an HTTP Server
- Example:
  ```javascript
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  });

  server.listen(3000, () => console.log('Server running on port 3000'));
  ```

---

## 4. Network Fundamentals for Web
- Understanding how HTTP, DNS, and TCP/IP work to facilitate communication over the web.
- Importance of HTTP methods like GET, POST, PUT, DELETE.

---

## 5. Routing in HTTP Server
- Learn how to handle different routes in a Node.js HTTP server.
- Example:
  ```javascript
  const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.end('Home Page');
    } else if (req.url === '/about') {
      res.end('About Page');
    } else {
      res.end('404 Not Found');
    }
  });
  ```

---

## 6. Using Nodemon
- Install Nodemon for auto-reloading the server:
  ```bash
  npm install -g nodemon
  nodemon server.js
  ```

---

## 7. Exploring Express Framework
- Express simplifies creating servers and APIs.
- Example:
  ```javascript
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
    res.send('Welcome to my Node.js API');
  });

  app.listen(3000, () => console.log('Server running on port 3000'));
  ```

---

## 8. Understanding the Concept of API
- APIs (Application Programming Interfaces) allow communication between client and server.
- RESTful APIs follow specific conventions to handle HTTP requests.

---

## 9. API Testing Using Thunder Client
- Use Thunder Client (VS Code extension) for testing API endpoints.
- Test endpoints like `GET /api/users` or `POST /api/login` with request payloads.

---

## 10. Exploring the Concept of Middleware
- Middleware functions execute during the request-response cycle.
- Example:
  ```javascript
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
  ```

---

## 11. Database Concepts

### SQL, NoSQL, and DBMS Explained
- **SQL**: Structured Query Language databases (e.g., MySQL, PostgreSQL).
- **NoSQL**: Non-relational databases (e.g., MongoDB).
- **DBMS**: Database management systems that handle storage and retrieval of data.

### Working with SQL Database
- Example using PostgreSQL:
  ```javascript
  const { Client } = require('pg');
  const client = new Client({ connectionString: 'postgres://user:password@localhost:5432/mydb' });
  client.connect();
  client.query('SELECT * FROM users', (err, res) => {
    console.log(res.rows);
    client.end();
  });
  ```

---

## 12. Understanding .env File
- Use `.env` to store sensitive data like API keys or database credentials.
- Example:
  ```env
  PORT=3000
  DB_URL=postgres://user:password@localhost:5432/mydb
  ```

---

## 13. Exploring Sequelize ORM
- Sequelize is an ORM for Node.js with support for SQL-based databases.
- Example:
  ```javascript
  const { Sequelize, DataTypes } = require('sequelize');
  const sequelize = new Sequelize('sqlite::memory:');

  const User = sequelize.define('User', {
    name: { type: DataTypes.STRING, allowNull: false },
  });

  sequelize.sync().then(() => console.log('Database synced'));
  ```

---

## 14. MVC Design Pattern
- **Model-View-Controller** structure helps organize code:
  - **Model**: Manages data and logic.
  - **View**: Displays data.
  - **Controller**: Handles user requests and responses.

---

## 15. Concepts of Migration and Seeding
- **Migration**: Scripts to modify database schema.
  - Example:
    ```bash
    sequelize migration:create --name create-users-table
    ```
- **Seeding**: Populate the database with initial data.
  - Example:
    ```bash
    sequelize seed:create --name add-default-users
    ```

---

## Resources
- [Official Node.js Documentation](https://nodejs.org/)
- [Sequelize Documentation](https://sequelize.org/)
- [Express Documentation](https://expressjs.com/)

---


