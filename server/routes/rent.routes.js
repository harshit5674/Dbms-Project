module.exports = app => {
    const rents = require("../controller/rent.controller.js");
    var router = require("express").Router();
    router.post("/", rents.create);
    // Retrieve all Tutorials
    router.get("/", rents.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", rents.findOne);
    // Update a Tutorial with id
    router.put("/", rents.update);
    // Delete a Tutorial with id
    router.delete("/", rents.delete);
    // Delete all Tutorials
    app.use('/api/rents', router);
  };