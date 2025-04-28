# backend_auth
# Project Overview
This project is a backend application built using Node.js, Express.js, and MongoDB. It provides a foundation for user authentication and management, and is designed to be secure, scalable, and well-structured.

Tech Stack

Node.js
Express.js
MongoDB
Mongoose
JWT (JSON Web Tokens)
bcryptjs
dotenv
nodemailer

Features

User Authentication:
User registration with input validation and password hashing.
User login with credential verification.
JWT-based authentication for protected routes.
Password reset functionality (forgot password and reset password).

Security:
Password hashing with bcryptjs.
JWT-based authentication.
Input validation with express-validator.
Protection against unauthorized access.

Configuration:
Environment-based configuration using dotenv.

Database:
MongoDB database connection with Mongoose.

Email Service:
Password reset email functionality using nodemailer.