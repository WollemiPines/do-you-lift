require('dotenv').config();

const Sequelize = require ('sequelize');

// Establish connection to server
const sequelize = new Sequelize(
    process.env.DB_name, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        },
    });


module.exports = sequelize;

