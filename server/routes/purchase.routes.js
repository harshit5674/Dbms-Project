module.exports = app => {
    const purchases = require("../controller/purchase.controller.js");
    var router = require("express").Router();
    router.post("/", purchases.create);
    // Retrieve all Tutorials
    router.get("/", purchases.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", purchases.findOne);
    // Update a Tutorial with id
    router.put("/", purchases.update);
    // Delete a Tutorial with id
    router.delete("/", purchases.delete);
    // Delete all Tutorials
    app.use('/api/purchases', router);
  };