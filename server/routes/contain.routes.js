module.exports = app => {
    const contains = require("../controller/contain.controller.js");
    var router = require("express").Router();
    router.post("/", contains.create);
    // Retrieve all Tutorials
    router.get("/", contains.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", contains.findOne);
    // Update a Tutorial with id
    router.put("/", contains.update);
    // Delete a Tutorial with id
    router.delete("/", contains.delete);
    // Delete all Tutorials
    app.use('/api/contains', router);
  };