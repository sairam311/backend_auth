const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { body } = require('express-validator');

const userValidationRules = [
  body('name').notEmpty().withMessage('Name is required').trim(),
  body('email').isEmail().withMessage('Invalid email address').normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];
router.post('/register', userValidationRules, authController.registerUser);
router.post('/login', [
    body('email').isEmail().withMessage('Invalid email address').normalizeEmail(),
    body('password').notEmpty().withMessage('Password is required'),
  ], authController.loginUser);
router.post('/forgot-password', [
    body('email').isEmail().withMessage('Invalid email address').normalizeEmail(),
  ], authController.forgotPassword);
router.post('/reset-password/:token', [
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ], authController.resetPassword);
  router.delete('/:id', authenticateJWT, authorizeRole('admin'), deleteUser);

module.exports = router;
