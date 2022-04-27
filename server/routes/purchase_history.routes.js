module.exports = app => {
    const purchase_histories = require("../controller/purchase_history.controller.js");
    var router = require("express").Router();
    router.post("/", purchase_histories.create);
    // Retrieve all Tutorials
    router.get("/", purchase_histories.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", purchase_histories.findOne);
    // Update a Tutorial with id
    router.put("/:id", purchase_histories.update);
    // Delete a Tutorial with id
    router.delete("/:id", purchase_histories.delete);
    // Delete all Tutorials
    router.delete("/", purchase_histories.deleteAll);
    app.use('/api/purchase_histories', router);
  };