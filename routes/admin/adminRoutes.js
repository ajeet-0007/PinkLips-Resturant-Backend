const express = require('express');
const router = express.Router();
const adminLogin = require('../../controller/adminController/adminLogin')

router.post('/sign-up', adminLogin.adminSignUp);


router.post('/log-in', adminLogin.adminLogIn)


module.exports = router;