const algoliasearch = require("algoliasearch");
const { Sequelize } = require("sequelize");
const sequelize = require("../../models/config");
const {index} = require('./sampleFunction')




exports.getFilteredProducts = async (req, res, next) => {
    try {
        const queryParams = req.query.filter;
        let client, index;
        
         client = algoliasearch(
            "UXG2M4SA2H",
            "bda025f6c0876247b2554b5d2a3bd270"
        );
        // console.log(client)
        index = client.initIndex("filteredProducts");
        index.search(queryParams).then(({ hits }) => {
            const results = hits.map((ele) => {
                delete ele._highlightResult;
                return ele;
            });
            return res.status(200).json(results);
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error", 
        });
    }
};

// Connect and authenticate with your Algolia app

// Create a new index. An index stores the data that you want to make searchable in Algolia.
// const index = client.initIndex("your_index_name");
