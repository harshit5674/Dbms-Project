module.exports = (sequelize, Sequelize) => {
    const Rent = sequelize.define("rent", {
      tid: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'rentals',
            key: 'id'
        }
      },
      pid: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      penalty: {
        type: Sequelize.STRING,
      }
    },
    {
      timestamps: false
    });
    return Rent;
  };