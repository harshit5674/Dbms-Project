const db = require("../model");
const Purchase = db.purchases;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    /*if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }*/
      const  purchase= {
        tid: req.body.pid,
        pid: req.body.phid,
        quantity_sell: req.body.quantity_sell,
        quantity_rent: req.body.quantity_rent,
        cost_price: req.body.cost_price,
      };
      // Save Tutorial in the database
      Purchase.create(rent)
        .then(data => {
          //res.send(data);
          res.redirect("/add-purchase");
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the product."
          });
        });
};
exports.findAll = async (req, res) => {
  if(req.query.sum){
    const id=req.query.id;
      rents= await db.sequelize.query('UPDATE PRODUCTS,RENTS SET PRODUCTS.QUANTITY_RENT=PRODUCTS.QUANTITY_RENT-CONTAINS.QUANTITY WHERE PRODUCTS.ID=CONTAINS.PID AND CONTAINS.TID=(:id)',{
        replacements:{id:req.query.id},
        type: db.sequelize.QueryTypes.UPDATE
      });
  }
  else if(req.query.pid){
    const id=req.query.id;
    const pid=req.query.pid;
    contains= await db.sequelize.query('SELECT * FROM RENTS WHERE TID=(:id) AND PID=(:pid)',{
      replacements:{id:req.query.id,
      pid:req.query.pid},
      type: db.sequelize.QueryTypes.SELECT
    });
  return res.status(200).json(contains)
  }
  else if(req.query.id){
    const id=req.query.id;
    contains= await db.sequelize.query('SELECT * FROM RENTS WHERE TID=(:id)',{
      replacements:{id:req.query.id},
      type: db.sequelize.QueryTypes.SELECT
    });
  return res.status(200).json(contains)
  }
  else{
    contains= await db.sequelize.query('SELECT * FROM RENTS ',{
      type: db.sequelize.QueryTypes.SELECT
    });
  return res.status(200).json(contains)
  }
  };

exports.findOne = (req, res) => {
    const id = req.query.id;
    Rent.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};    

exports.update = async (req, res) => {
    if(req.query.sum){
        contains= await db.sequelize.query('UPDATE PRODUCTS,RENTS SET PRODUCTS.QUANTITY_RENT=PRODUCTS.QUANTITY_RENT-RENTS.QUANTITY WHERE PRODUCTS.ID=RENTS.PID AND RENTS.TID=(:id)',{
            replacements:{id:req.query.tid},
            type: db.sequelize.QueryTypes.UPDATE
          });
    }
    else{
        console.log('BATMAN')
        contains= await db.sequelize.query('UPDATE RENTS SET QUANTITY=(:quantity) WHERE TID=(:tid) AND PID=(:pid)',{
          replacements:{tid:req.query.tid,
          quantity:req.query.quantity,
        pid:req.query.pid,
        },
          type: db.sequelize.QueryTypes.UPDATE
        });
    }
};

  exports.delete = async (req, res) => {
    contains= await db.sequelize.query('DELETE FROM RENTS WHERE TID=(:tid) AND PID=(:pid)',{
        replacements:{tid:req.query.tid,
      pid:req.query.pid,
      },
        type: db.sequelize.QueryTypes.DELETE
      });
  };

  exports.deleteAll = (req, res) => {
    Purchase.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };
  