module.exports = app => {
    const customers = require("../controller/customer.controller.js");
    var router = require("express").Router();
    router.post("/", customers.create);
    // Retrieve all Tutorials
    router.get("/", customers.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", customers.findOne);
    // Update a Tutorial with id
    router.put("/:id", customers.update);
    // Delete a Tutorial with id
    router.delete("/:id", customers.delete);
    // Delete all Tutorials
    router.delete("/", customers.deleteAll);
    app.use('/api/customers', router);
  };