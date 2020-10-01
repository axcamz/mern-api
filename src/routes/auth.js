const express = require('express')
const router = express.Router()
const { body } = require('express-validator');

const authController = require('../controller/auth')

router.post(
    '/register', 
    [
        body('name').isLength({min:5}).withMessage('Minial Character 5'),
        body('email').isLength({min:5}).withMessage('Minial Character 5'),
        body('password').isLength({min:8}).withMessage('Minial Character 8'),
    ],
    authController.register
)


module.exports = router;