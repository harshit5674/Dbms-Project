module.exports = (sequelize, Sequelize) => {
    const Rent = sequelize.define("rent", {
      tid: {
        type: Sequelize.STRING,
        primaryKey: true,
        references: {
            model: 'rentals',
            key: 'id'
        }
      },
      pid: {
        type: Sequelize.STRING,
        primaryKey:true,
        references: {
            model: 'products',
            key: 'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false
    });
    return Rent;
  };