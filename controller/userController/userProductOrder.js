const sequelize = require('../../models/config')
const {Sequelize} = require('sequelize')

exports.userProductOrder = async (req, res, next)=>{
    try {
        const {order_id, total_amount, order_items} = req.body;
        const userEmail = req.user.user_email;
        const [result] = await sequelize.query('Call find_user(?)',{
            replacements: [userEmail] 
        })
        const [order_result] = await sequelize.query(
            "Call orders(?, ?, ?, ?,?, @p_success )",
            {
                replacements: [
                    order_id,
                    result.userId,
                    result.user_name,
                    total_amount,
                    "pending",
                ],
                type: Sequelize.QueryTypes.RAW,
            }
        );

        if(order_result.p_success===1){
          order_items.map(async (item)=>{
                await sequelize.query("Call order_item(?, ?, ?, ?, @p_success)", {
                    replacements: [
                        item.product_id,
                        order_id,
                        item.quantity, 
                        item.price
                    ]
                })
            })
        }

        return res.status(201).json({
            message : "Order Placed SuccessFully"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}