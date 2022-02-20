const Sequelize = require('sequelize');
// const config = require('../utils/config');
// const config = process.env;
const connection = new Sequelize("sql6474105", "sql6474105", "AsAaXurmFE", {
    host: "sql6.freemysqlhosting.net",
    dialect: "mysql",
    // dialect: process.env.dialect,
    define: {
        timestamps: false
    }
});

module.exports = connection;