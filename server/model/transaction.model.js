module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("transaction", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      date: {
        type: Sequelize.DATEONLY
      },
      cid: {
        type: Sequelize.STRING,
        references: {
          model: 'customers',
          key: 'id'
      }
      },
      wid: {
        type: Sequelize.STRING,
        references: {
          model: 'workers',
          key: 'id'
      }
      }
    },
    {
      timestamps: false
    });
    return Transaction;
  };