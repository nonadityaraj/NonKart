const express = require('express');
const router = express.Router();
const cartController  = require('../controller/cartController')
const authMiddlewear = require('../middlewear/authMiddlewear')


router.get('/',authMiddlewear,cartController.findUserCartHandler)

router.put('/add',authMiddlewear,cartController.addItemToCart)
router.delete('/item/:cartItemId',authMiddlewear,cartController.deleteCartItemHandler)
router.put('/item/:cartItemId',authMiddlewear,cartController.updateCartItemHandler)

module.exports = router