const sequelize = require("../../models/config");
const {Sequelize} = require('sequelize');

exports.getAllProductsForUser = async (req, res) => {
    try {
        const results = await sequelize.query("CALL get_all_products()", {
            
            type: Sequelize.QueryTypes.RAW,
        });
        if(results.length){
            return res.status(200).json({
                'products' : results
            })
        }else{
            return res.status(200).json({
                "message": "No products found!!"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
