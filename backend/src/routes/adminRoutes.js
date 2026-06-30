const express = require('express');
const SellerController = require('../controller/SellerController');
const router = express.Router();


router.patch("/seller/:id/status/:status", SellerController.updateAccountStatus)


module.exports = router