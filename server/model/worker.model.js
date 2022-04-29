module.exports = (sequelize, Sequelize) => {
    const Worker = sequelize.define("worker", {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      house_number: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      city:{
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false
    });
    return Worker;
  };