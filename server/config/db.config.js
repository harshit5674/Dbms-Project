module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "lmao",
    DB: "shop",
    dialect: "mysql",
    define:{
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};