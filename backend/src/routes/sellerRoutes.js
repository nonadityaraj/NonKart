const express = require('express');
const router = express.Router();


const SellerController = require('../controller/SellerController');
const sellerMiddlewear = require('../middlewear/sellerAuthMiddlewear');





router.get('/profile',sellerMiddlewear, SellerController.getSellerProfile)
router.post('/',SellerController.createSeller)
router.get('/',SellerController.getAllSellers)
router.patch('/',SellerController.updateSeller)
router.post('/verify/login',SellerController.verifyLoginOtp)

module.exports = router