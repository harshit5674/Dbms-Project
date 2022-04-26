module.exports = (sequelize, Sequelize) => {
    const Rental = sequelize.define("rental", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      s_date: {
        type: Sequelize.DATEONLY
      },
      r_date: {
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
    return Rental;
  };