const express = require('express');
const router = express.Router();
const userSignUp = require('../../controller/userController/userLogin');
const sequelize = require('../../models/config');
const {Sequelize} = require('sequelize')


router.post('/sign-up', userSignUp.userSignUp);

router.post('/log-in', userSignUp.userLogIn);
 
// router.get('/u', async (req, res)=>{
//     const result = await sequelize.query(
//         "CALL get_users()", {type: Sequelize.QueryTypes.RAW}, )
//     console.log(result);
// })

module.exports = router;