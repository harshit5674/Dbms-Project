module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customers", {
      id: {
        type: Sequelize.STRING,
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
    return Customer;
  };