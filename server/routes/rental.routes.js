module.exports = app => {
    const rentals = require("../controller/rental.controller.js");
    var router = require("express").Router();
    router.post("/", rentals.create);
    // Retrieve all Tutorials
    router.get("/", rentals.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", rentals.findOne);
    // Update a Tutorial with id
    router.put("/:id", rentals.update);
    // Delete a Tutorial with id
    router.delete("/:id", rentals.delete);
    // Delete all Tutorials
    router.delete("/", rentals.deleteAll);
    app.use('/api/rentals', router);
  };