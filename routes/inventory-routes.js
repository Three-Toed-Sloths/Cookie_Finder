const db = require("../models");

module.exports = function(app){

    // GET full inventory
    app.get("/api/inventory", function(req,res){

        db.Inventory.findAll({
            include: [db.Products][db.Seller]
        }).then(function(dbInventory){
            res.json(dbInventory);
        });
    });

    // GET inventory by seller
    app.get("/api/inventory/:id", function(req,res){

        db.Inventory.findAll({
            where: {
                sellerID: req.params.id
            },
            include: [db.Products][db.Seller]
        }).then(function(dbInventory){
            res.json(dbInventory);
        });
    });

    // GET inventory by product
    app.get("/api/inventory/:id", function(req,res){

        db.Inventory.findAll({
            where: {
                productId: req.params.id
            },
            include: [db.Products][db.Seller]
        }).then(function(dbInventory){
            res.json(dbInventory);
        });
    });


    // POST new inventory
    app.post("/api/inventory", function(req, res) {
        db.Inventory.create(req.body).then(function(dbInventory) {
          res.json(dbInventory);
        });
    });


    // DELETE inventory
    app.delete("/api/inventory/:id", function(req,res){

        db.Inventory.destroy({
            where: {
                id: req.params.id
            },
        }).then(function(dbInventory){
            res.json(dbInventory);
        });
    });


}