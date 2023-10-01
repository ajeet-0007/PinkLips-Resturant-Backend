const express = require('express');
const router = express.Router();
const userSignUp = require('../../controller/userController/userLogin');
const sequelize = require('../../models/config');
const {Sequelize} = require('sequelize')


router.post('/sign-up', userSignUp.userSignUp);

router.post('/log-in', userSignUp.userLogIn);
 

module.exports = router;


// const express = require("express");
// const cors = require("cors");

// const app = express();

// // Allow requests from the emulator's IP address
// app.use(
//     cors({
//         origin: "http://emulator_ip:port", // Replace with the emulator's IP address and port
//     })
// );

// // Your API routes and other middleware setup here

// const port = 3001; // Replace with your desired port number
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// router.get('/u', async (req, res)=>{
//     const result = await sequelize.query(
//         "CALL get_users()", {type: Sequelize.QueryTypes.RAW}, )
//     console.log(result);
// })
