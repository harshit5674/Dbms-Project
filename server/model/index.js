const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: '3306',
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.products = require("./product.model.js")(sequelize, Sequelize);
db.customers = require("./customer.model.js")(sequelize, Sequelize);
db.workers = require("./worker.model.js")(sequelize, Sequelize);
db.transactions = require("./transaction.model.js")(sequelize, Sequelize);
db.contains = require("./contain.model.js")(sequelize, Sequelize);
db.rentals = require("./rental.model.js")(sequelize, Sequelize);
db.rents = require("./rent.model.js")(sequelize, Sequelize);
db.purchase_histories  = require("./purchase_history.model.js")(sequelize, Sequelize);
db.purchases = require("./purchase.model.js")(sequelize, Sequelize);



module.exports = db;