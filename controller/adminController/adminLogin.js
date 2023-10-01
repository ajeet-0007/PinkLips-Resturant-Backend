require("dotenv").config();
const sequelize = require("../../models/config");
const { Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.adminSignUp = async (req, res, next) => {
    try {
        const requestData = req.body;
        const password = await bcrypt.hash(req.body.admin_password, 10);
        const [result] = await sequelize.query(
            "CALL InsertAdmin(?, ?, ?, ?, ?, ?, @p_success)",
            {
                replacements: [
                    requestData.adminId,
                    requestData.admin_name,
                    requestData.admin_email,
                    requestData.admin_phone_number,
                    requestData.admin_address,
                    password,
                ],
                type: Sequelize.QueryTypes.RAW,
            }
        );
        return res.status(201).json({
            data: result.p_success,
            message: "Admin SignUp Successfull"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

exports.adminLogIn = async (req, res, next) => {
    try {
        const requestData = req.body;
        const result = await sequelize.query("CALL admin_login(?)", {
            replacements: [requestData.admin_email],
            type: Sequelize.QueryTypes.RAW,
        });
        const passwordComparedResult = await bcrypt.compare(
            requestData.admin_password,
            result[0].admin_password
        );
        if (passwordComparedResult) {
            const token = await jwt.sign(
                { admin_email: requestData.admin_email },
                process.env.ADMIN_SECRET_KEY
            );
            return res.status(200).json({
                message: "admin login successful",
                accessToken: token,
            });
        } else {
            return res.status(401).json({
                message: "admin login failed",
            });
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
