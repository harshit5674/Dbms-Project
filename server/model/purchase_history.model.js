module.exports = (sequelize, Sequelize) => {
    const Purchase_history = sequelize.define("Purchase_history", {
      id: {
        type: Sequelize.STRING,
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