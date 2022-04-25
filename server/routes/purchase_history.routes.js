module.exports = app => {
    const purchase_historys = require("../controller/purchase_history.controller.js");
    var router = require("express").Router();
    router.post("/", purchase_historys.create);
    // Retrieve all Tutorials
    router.get("/", purchase_historys.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", purchase_historys.findOne);
    // Update a Tutorial with id
    router.put("/:id", purchase_historys.update);
    // Delete a Tutorial with id
    router.delete("/:id", purchase_historys.delete);
    // Delete all Tutorials
    router.delete("/", purchase_historys.deleteAll);
    app.use('/api/purchase_historys', router);
  };