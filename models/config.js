require("dotenv").config();
const { Sequelize } = require("sequelize");

const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_HOST = process.env.DATABASE_HOST;

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    {
        host: DATABASE_HOST,
        dialect: "mysql",
        logging: false
    }
);

try {
    sequelize.authenticate().then(() => {
        console.log("database connected successfully");
    });
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
