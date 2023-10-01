const express = require("express");
const router = express.Router();
const adminLogin = require("../../controller/adminController/adminLogin");
const adminProductUpload = require('../../controller/adminController/adminProductUpload');
const authorize = require('../../middlewares/adminAuthorize')
const upload = require('../../middlewares/productsUpload')

router.post("/sign-up", adminLogin.adminSignUp);

router.post("/log-in", adminLogin.adminLogIn);

router.post('/products-upload',authorize.authorize, upload.single('csvData'),adminProductUpload.adminProductUpload);

module.exports = router;
 