module.exports = app => {
    const transactions = require("../controller/transaction.controller.js");
    var router = require("express").Router();
    router.post("/", transactions.create);
    // Retrieve all Tutorials
    router.get("/", transactions.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", transactions.findOne);
    // Update a Tutorial with id
    router.put("/:id", transactions.update);
    // Delete a Tutorial with id
    router.delete("/:id", transactions.delete);
    // Delete all Tutorials
    router.delete("/", transactions.deleteAll);
    app.use('/api/transactions', router);
  };