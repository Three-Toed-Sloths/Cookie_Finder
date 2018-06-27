const db = require("../models");

module.exports = function(app){

    // GET all products
    app.get("/api/products", function(req,res){
        db.Products.findAll({}).then(function(dbProducts){
            res.json(dbProducts);
        });
    });

    // GET product by ID
    app.get("/api/products/:id", function(req, res) {
        db.Products.findOne({
        where: {
            id: req.params.id
        }
        }).then(function(dbProduct) {
        res.json(dbProduct);
        });
    });



    // POST new products (may not need)
    app.post("/api/products", function(req, res){
        db.Products.create(req.body).then(function(dbProducts){
            res.json(dbProducts)
        });
    });

    // DELETE product
    app.delete("/api/products/:id", function(req, res) {
        db.Products.destroy({
        where: {
            id: req.params.id
        }
        }).then(function(dbProducts) {
        res.json(dbProducts);
        });
    });

    // UPDATE products
    app.put("/api/products", function(req, res) {
        db.Products.update(
        req.body,
        {
            where: {
            id: req.body.id
            }
        }).then(function(dbProducts) {
        res.json(dbProducts);
        });
    });

};