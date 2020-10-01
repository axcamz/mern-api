const express = require('express')
const router = express.Router()
const productController = require('../controller/products')

router.post('/product', productController.postData)
router.get('/products', productController.getData)
router.delete('/product', productController.deleteData)

module.exports = router
