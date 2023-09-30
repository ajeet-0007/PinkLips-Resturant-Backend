require('dotenv').config()
const sequelize = require("../../models/config");
const { Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.userSignUp = async (req, res, next) => {
    try {
        const requestData = req.body;
        const password = await bcrypt.hash(req.body.user_password, 10);
        const [result] = await sequelize.query(
            "CALL InsertUser(?, ?, ?, ?, ?, ?, @p_success)",
            {
                replacements: [
                    requestData.userId, 
                    requestData.user_name,
                    requestData.user_email,
                    requestData.user_phone_number,
                    requestData.user_address,
                    password,
                ],
                type: Sequelize.QueryTypes.RAW,
            }
        );
        return res.status(201).json({
            data: result.p_success,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

exports.userLogIn = async (req, res, next) => {
    try {
        const requestData = req.body;
        const result = await sequelize.query("CALL user_login(?)", {
            replacements: [requestData.user_email],
            type: Sequelize.QueryTypes.RAW,
        });
        const passwordComparedResult = await bcrypt.compare(
            requestData.user_password,
            result[0].user_password
        );
        if (passwordComparedResult) {
            const token = await jwt.sign({user_email: requestData.user_email}, process.env.SECRET_KEY)
            return res.status(200).json({
                message: "user login successful",
                accessToken : token
            });
        } else {
            return res.status(401).json({
                message: "user login failed",
            });
        }
    } catch {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
