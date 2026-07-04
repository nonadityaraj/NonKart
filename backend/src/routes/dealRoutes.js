const express = require('express');
const router = express.Router();
const dealController = require('../controller/dealController')


router.get('/',dealController.getAllDeals)
router.post('/',dealController.createDeals)
router.put('/:id',dealController.updateDeals)
router.delete('/:id',dealController.deleteDeals)

module.exports = router