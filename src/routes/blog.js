const express = require('express')
const router = express.Router();
const { body } = require('express-validator');

const blogController = require('../controller/blog');

router.post(
    '/post',
    [
        body('title').isLength({min:5}).withMessage('Karakter minimal 5'),
        body('body').isLength({min:5}).withMessage('Karakter minimal 5')
    ],
    blogController.createPost
)

module.exports = router