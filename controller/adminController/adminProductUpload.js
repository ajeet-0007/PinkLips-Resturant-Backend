const sequelize = require('../../models/config')
const XLSX = require("xlsx");
const fs = require("fs");
const csv = require("fast-csv");

exports.adminProductUpload =  async (req, res, next)=>{
    try {
        		const file = __dirname + "/uploads/" + req.file.filename;
                console.log(file);
                let stream = fs.createReadStream(file);
                let csvData = [];
                let fileStream = csv.parse()
                    .on("data", (data) => {
                        csvData.push(data);
                    })
                    .on("end", async () => {
                        csvData.shift();
                        await sequelize
                            .query(
                                "INSERT INTO products (productId, product_name, product_price_small, product_price_large, product_description, product_image ) VALUES ?",
                                {
                                    replacements: [csvData],
                                    // type: Sequelize.QueryTypes.RAW,
                                }
                            )
                            .then((data) => {
                                return res.status(201).json({
                                    message: "File uploaded successfully",   
                                });
                            })
                            .catch((error) => {
                                console.log("ee", error);
                                return res.status(200).json({
                                    message:
                                        "The file cannot be uploaded due to uneven data",
                                });
                            });
                        fs.unlinkSync(file);
                    });
                stream.pipe(fileStream);
        
    } catch (error) {
        console.log(error);
    }
}