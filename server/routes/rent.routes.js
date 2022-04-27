module.exports = app => {
    const contains = require("../controller/rent.controller.js");
    var router = require("express").Router();
    router.post("/", rents.create);
    // Retrieve all Tutorials
    router.get("/", rents.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", rents.findOne);
    // Update a Tutorial with id
    router.put("/:id", rents.update);
    // Delete a Tutorial with id
    router.delete("/:id", rents.delete);
    // Delete all Tutorials
    router.delete("/", rents.deleteAll);
    app.use('/api/rents', router);
  };