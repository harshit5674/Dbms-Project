module.exports = app => {
    const workers = require("../controller/worker.controller.js");
    var router = require("express").Router();
    router.post("/", workers.create);
    // Retrieve all Tutorials
    router.get("/", workers.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", workers.findOne);
    // Update a Tutorial with id
    router.put("/:id", workers.update);
    // Delete a Tutorial with id
    router.delete("/:id", workers.delete);
    // Delete all Tutorials
    router.delete("/", workers.deleteAll);
    app.use('/api/workers', router);
  };