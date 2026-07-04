const express = require('express')
const router = express.Router();
const homeCategoryController = require('../controller/homeCategoryController')

router.post('/categories',homeCategoryController.createHomeCategory)
router.get('/home-category',homeCategoryController.getAllHomeCategories)
router.put('/home-category/:id',homeCategoryController.updateHomeCategory)

module.exports = router