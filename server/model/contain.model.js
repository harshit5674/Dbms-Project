module.exports = (sequelize, Sequelize) => {
    const Contain = sequelize.define("contain", {
      tid: {
        type: Sequelize.STRING,
        primaryKey: true,
        references: {
            model: 'transactions',
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
    return Contain;
  };