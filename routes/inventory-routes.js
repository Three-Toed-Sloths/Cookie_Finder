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
    app.get("/api/inventory/seller/:id", function(req,res){

        db.Inventory.findAll({
            where: {
                sellerId: req.params.id
            },
            include: [db.Products][db.Seller]
        }).then(function(dbInventory){
            res.json(dbInventory);
        });
    });

    // GET inventory by product
    app.get("/api/inventory/product/:id", function(req,res){

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
        const newInventory = req.body;

        db.Inventory.create({
            stock: newInventory.stock,
            productId: newInventory.productId,
            sellerId: newInventory.sellerID

        }).then(function(dbInventory) {
          res.json(dbInventory);
        });
    });

    // UPDATE new inventory
    app.put("/api/inventory/", function(req, res) {
    
            db.Inventory.update(
                req.body,
                {
                    where: {
                        //this should be inventory unique ID
                        id: req.body.id
                    }  
            }).then(function(dbInventory) {
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