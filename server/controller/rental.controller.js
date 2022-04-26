const db = require("../model");
const Transaction = db.transactions;
const Op = db.Sequelize.Op;
const axios=require('axios')

exports.create = (req, res) => {
    /*if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }*/
      const  rental= {
        id: req.body.id,
        s_date: req.body.s_date,
        r_date: req.body.r_date,
        cid: req.body.cid,
        wid :req.body.wid
        
      };
      Rental.create(rental)
        .then(data => {
          //res.send(data);
          res.redirect("/add-rental");
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while renting."
          });
        });

};
exports.findAll = (req, res) => {
  if(req.query.id){
    const id = req.query.id;
    Rental.findByPk(id)
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
  }
  else{
    console.log(req.query.title)
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Rental.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  }
};

exports.findOne = (req, res) => {
    const id = req.query.id;
    Rental.findByPk(id)
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

exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id);
    axios.get("http://localhost:3000/api/customers/",{params:{cid:req.body.cid}})
        .then(function(response){
            console.log('HI')
            axios.get("http://localhost:3000/api/workers/",{params:{wid:req.body.wid}})
        .then(function(response){
            Rental.update(req.body, {
                where: { id: id }
              })
                .then(num => {
                  if (num == 1) {
                    res.send({
                      message: "Tutorial was updated successfully."
                    });
                  } else {
                    res.send({
                      message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                    });
                  }
                })
                .catch(err => {
                  res.status(500).send({
                    message: "Error updating Tutorial with id=" + id
                  });
                });
        })
        .catch(err=>{
        res.send(err);
        })
        })
        .catch(err=>{
        res.send(err);
        })
    
};

  exports.delete = (req, res) => {
    const id = req.params.id;
    Rental.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };

  exports.deleteAll = (req, res) => {
    Rental.destroy({
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
  