const express = require('express')
const { getUserProfileByJwt } = require('../controller/userController')
const authMiddlewear = require('../middlewear/authMiddlewear')
const router = express.Router()

router.get('/profile',authMiddlewear,getUserProfileByJwt)

module.exports = router;