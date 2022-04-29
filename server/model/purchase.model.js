module.exports = (sequelize, Sequelize) => {
    const Purchase = sequelize.define("Purchase", {
      pid: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id'
        }
      },
      phid: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull: false,
        references: {
            model: 'purchase_histories',
            key: 'id'
        }
      },
      quantity_sell: {
        type: Sequelize.INTEGER,
      },
      quantity_rent: {
        type: Sequelize.INTEGER,
      },
      cost_price: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false
    });
    return Purchase;
  };