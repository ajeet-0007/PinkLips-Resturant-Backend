const { Sequelize } = require("sequelize");
const sequelize = require("../../models/config");

exports.userGetProductsById = async (req, res, next) => {
    try {
        const requestData = req.params;
        const result = await sequelize.query("CALL getProductsById(?)", {
            replacements: [requestData["productId"]],
            type: Sequelize.QueryTypes.RAW,
        });
        if (result.length) {
            return res.status(200).json({
                product: result,
            });
        } else {
            return res.status(200).json({
                message: "no product found",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "No products found!!",
        });
    }
};
