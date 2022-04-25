const db = require("../model");
const Worker = db.workers;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    /*if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }*/
      const  worker= {
        id: req.body.id,
        name: req.body.name,
        mobile: req.body.mobile,
        house_number: req.body.house_number,
        street: req.body.street,
        city: req.body.city,
      };
      // Save Tutorial in the database
      Worker.create(worker)
        .then(data => {
          //res.send(data);
          res.redirect("/add-worker");
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the worker."
          });
        });
};
exports.findAll = (req, res) => {
  if(req.query.id){
    const id = req.query.id;
    Worker.findByPk(id)
      .then(data => {
        if (data) {
          console.log('HI')
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
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Worker.findAll({ where: condition })
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
    Worker.findByPk(id)
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
    Worker.update(req.body, {
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
};

  exports.delete = (req, res) => {
    const id = req.params.id;
    Worker.destroy({
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
    Worker.destroy({
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
  