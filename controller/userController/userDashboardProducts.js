const { Sequelize } = require('sequelize')
const sequelize = require('../../models/config')

exports.userDashboardGetBurgers = async (req, res, next) => {
    try {
        const result = await sequelize.query("CALL get_burgers()", {type: Sequelize.QueryTypes.RAW})
        if(result.length){
            return res.status(200).json({
                burgers: result
            })
        }else{
            return res.status(200).json({
                message: "No burgers found"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

exports.userDashboardGetChineseCategory = async (req, res)=>{
    try {
        const result = await sequelize.query('CALL get_chinese()', {type: Sequelize.QueryTypes.RAW})
         if (result.length) {
             return res.status(200).json({
                 chinese: result,
             });
         } else {
             return res.status(200).json({
                 message: "No chinese product found",
             });
         }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

exports.userDashboardGetGalicBreadCategory = async (req, res, next)=>{
    try {
        const result = await sequelize.query("CALL get_garlic_bread()", {type: Sequelize.QueryTypes.RAW})
        if (result.length) {
            return res.status(200).json({
                garlic_bread: result,
            });
        } else {
            return res.status(200).json({
                message: "No garlic breads found",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

exports.userDashboardGetSandwichCategory = async (req, res)=>{
    try {
        const result = await sequelize.query("CALL get_sandwich()", {type: Sequelize.QueryTypes.RAW})
        if (result.length) {
            return res.status(200).json({
                 sandwich: result,
            });
        } else {
            return res.status(200).json({
                message: "No sandwich products found",
            });
        }
    } catch (error) {
        condsole.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

exports.userDashboardGetPizzaCategory = async (req, res)=>{
    try {
        const result = await sequelize.query('CALL get_pizza()', {type: Sequelize.QueryTypes.RAW})
        if (result.length) {
            return res.status(200).json({
                pizza: result,
            });
        } else {
            return res.status(200).json({
                message: "No pizza's found",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

exports.userDashboardGetPastaCategory = async (req, res)=>{
    try {
        const result = await sequelize.query("CALL get_pasta()", {type: Sequelize.QueryTypes.RAW})
        if(result.length){
            return res.status(200).json({
                pasta : result
            })
        }else{
            return res.status(200).json({
                message: "No pasta product found"
            })
        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

exports.userDashboardGetFrenchFriesCategory =  async (req, res) => {
    try {
        const result = await sequelize.query("CALL get_french_fries()", {
            type: Sequelize.QueryTypes.RAW,
        });
        if (result.length) {
            return res.status(200).json({
                french_fries: result,
            });
        } else {
            return res.status(200).json({
                message: "No french-fries product found",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

exports.userDashboardGetSoftDrinksCategory = async (req, res)=>{
    try {
        const result = await sequelize.query("CALL get_soft_drinks()", {
            type: Sequelize.QueryTypes.RAW,
        });
        if (result.length) {
            return res.status(200).json({
                soft_drinks: result,
            });
        } else {
            return res.status(200).json({
                message: "No soft-drinks product found",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

exports.userDashboardGetPinkChaiCategory = async (req, res) => {
    try {
        const result = await sequelize.query("CALL get_pink_chai()", {
            type: Sequelize.QueryTypes.RAW,
        });
        if (result.length) {
            return res.status(200).json({
                pink_chai: result,
            });
        } else {
            return res.status(200).json({
                message: "No pink-chai product found",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};


exports.userDashboardGetChaiCategory = async (req, res) => {
    try {
        const result = await sequelize.query("CALL get_chai()", {
            type: Sequelize.QueryTypes.RAW,
        });
        if (result.length) {
            return res.status(200).json({
                chai: result,
            });
        } else {
            return res.status(200).json({
                message: "No chai product found",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};


exports.userDashboardGetHotMilkCategory = async (req, res) => {
    try {
        const result = await sequelize.query("CALL get_hot_milk()", {
            type: Sequelize.QueryTypes.RAW,
        });
        if (result.length) {
            return res.status(200).json({
                hot_milk: result,
            });
        } else {
            return res.status(200).json({
                message: "No hot milk product found",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};


exports.userDashboardGetColdCoffeeCategory = async (req, res) => {
    try {
        const result = await sequelize.query("CALL get_cold_coffee()", {
            type: Sequelize.QueryTypes.RAW,
        });
        if (result.length) {
            return res.status(200).json({
                cold_coffee: result,
            });
        } else {
            return res.status(200).json({
                message: "No cold coffee product found",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

exports.userDashboardGetHotCoffeeCategory = async (req, res) => {
    try {
        const result = await sequelize.query("CALL get_hot_coffee()", {
            type: Sequelize.QueryTypes.RAW,
        });
        if (result.length) {
            return res.status(200).json({
                hot_coffee: result,
            });
        } else {
            return res.status(200).json({
                message: "No hot coffee product found",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

exports.userDashboardGetMockTailsCategory = async (req, res) => {
    try {
        const result = await sequelize.query("CALL get_mock_tails", {
            type: Sequelize.QueryTypes.RAW,
        });
        if (result.length) {
            return res.status(200).json({
                mock_tails: result,
            });
        } else {
            return res.status(200).json({
                message: "No mock tails product found",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

exports.userDashboardGetShakesCategory = async (req, res) => {
    try {
        const result = await sequelize.query("CALL get_shakes()", {
            type: Sequelize.QueryTypes.RAW,
        });
        if (result.length) {
            return res.status(200).json({
                shakes: result,
            });
        } else {
            return res.status(200).json({
                message: "No shakes product found",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

exports.userDashboardGetSoupCategory = async (req, res) => {
    try {
        const result = await sequelize.query("CALL get_soups()", {
            type: Sequelize.QueryTypes.RAW,
        });
        if (result.length) {
            return res.status(200).json({
                soups: result,
            });
        } else {
            return res.status(200).json({
                message: "No soups product found",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

exports.userDashboardGetIceCreamCategory = async (req, res) => {
    try {
        const result = await sequelize.query("CALL get_ice_cream()", {
            type: Sequelize.QueryTypes.RAW,
        });
        if (result.length) {
            return res.status(200).json({
                ice_cream: result,
            });
        } else {
            return res.status(200).json({
                message: "No ice cream product found",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

