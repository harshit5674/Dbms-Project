module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      quantity_sell: {
        type: Sequelize.INTEGER
      },
      quantity_rent:{
        type: Sequelize.INTEGER
      },
      selling_price:{
        type: Sequelize.INTEGER
      }
    },
    {
      timestamps: false
    });
    return Product;
  };