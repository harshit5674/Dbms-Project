module.exports = (sequelize, Sequelize) => {
    const Purchase_history = sequelize.define("purchase_history", {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
        date: {
        type: Sequelize.DATEONLY
      },
      mobile:{
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false
    });
    return Purchase_history;
  };