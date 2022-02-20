const Sequelize = require('sequelize');
const connection = new Sequelize("sql6474105", "sql6474105", "AsAaXurmFE", {
    host: "sql6.freemysqlhosting.net",
    dialect: "mysql",
    define: {
        timestamps: false
    }
});

module.exports = connection;