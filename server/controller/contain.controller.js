const { reset } = require("nodemon");
const { contains } = require("../model");
const db = require("../model");
const Contain = db.contains;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    /*if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }*/
      const  contain= {
        tid: req.body.tid,
        pid: req.body.pid,
        quantity: req.body.quantity,
      };
      // Save Tutorial in the database
      Contain.create(contain)
        .then(data => {
          //res.send(data);
          res.redirect("/add-contain");
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
      xyz= await db.sequelize.query('UPDATE PRODUCTS,CONTAINS SET PRODUCTS.QUANTITY_SELL=PRODUCTS.QUANTITY_SELL-CONTAINS.QUANTITY WHERE PRODUCTS.ID=CONTAINS.PID AND CONTAINS.TID=(:id)',{
        replacements:{id:req.query.id},
        type: db.sequelize.QueryTypes.UPDATE
      });
     sums= await db.sequelize.query('SELECT SUM(C.QUANTITY*P.SELLING_PRICE) AS TOTAL FROM PRODUCTS P,CONTAINS C WHERE P.ID=C.PID AND C.TID=(:id)',{
     replacements:{id:req.query.id},
       type: db.sequelize.QueryTypes.SELECT
     });
  return res.status(200).json(sums)
  }
  else if(req.query.why){
      indi= await db.sequelize.query('SELECT SUM(C.QUANTITY*P.SELLING_PRICE) AS INDI FROM PRODUCTS P,CONTAINS C WHERE C.PID=(:pid) AND P.ID=C.PID AND C.TID=(:tid)',{
        replacements:{pid:req.query.pid,
        tid:req.query.tid},
        type: db.sequelize.QueryTypes.SELECT
      });
     sums= await db.sequelize.query('SELECT SUM(C.QUANTITY*P.SELLING_PRICE) AS TOTAL FROM PRODUCTS P,CONTAINS C WHERE P.ID=C.PID AND C.TID=(:tid)',{
     replacements:{tid:req.query.tid,
    },
       type: db.sequelize.QueryTypes.SELECT
     });
     const data={
      indi:indi,
      sums:sums,
    }
    console.log(data)
  return res.send(data)
  }
  else if(req.query.pid){
    const id=req.query.id;
    const pid=req.query.pid;
    abc= await db.sequelize.query('SELECT * FROM CONTAINS WHERE TID=(:id) AND PID=(:pid)',{
      replacements:{id:req.query.id,
      pid:req.query.pid},
      type: db.sequelize.QueryTypes.SELECT
    });
  return res.status(200).json(abc) 
  }
  else if(req.query.id){
    const id=req.query.id;
    abs= await db.sequelize.query('SELECT * FROM CONTAINS WHERE TID=(:id)',{
      replacements:{id:req.query.id},
      type: db.sequelize.QueryTypes.SELECT
    });
  return res.status(200).json(abs)
  }
  else{
    con= await db.sequelize.query('SELECT * FROM CONTAINS ',{
      type: db.sequelize.QueryTypes.SELECT
    });
  return res.status(200).json(con)
  }
  };

exports.findOne = (req, res) => {
    const id = req.query.id;
    Contain.findByPk(id)
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
  console.log('BATMAN')
    abs= await db.sequelize.query('UPDATE CONTAINS SET QUANTITY=(:quantity) WHERE TID=(:tid) AND PID=(:pid)',{
      replacements:{tid:req.query.tid,
      quantity:req.query.quantity,
    pid:req.query.pid,
    },
      type: db.sequelize.QueryTypes.UPDATE
    });
};

  exports.delete = async (req, res) => {
  abs= await db.sequelize.query('DELETE FROM CONTAINS WHERE TID=(:tid) AND PID=(:pid)',{
      replacements:{tid:req.query.tid,
    pid:req.query.pid,
    },
      type: db.sequelize.QueryTypes.DELETE
    });
  };

  exports.deleteAll = (req, res) => {
    Contain.destroy({
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
  