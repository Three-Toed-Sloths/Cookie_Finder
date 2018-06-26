const db = require("../models");

module.exports = function(app){
    // GET all sellers
    app.get("/api/sellers", function(req, res){
        db.Seller.findAll({}).then(function(dbSeller){
            res.json(dbSeller);
        });
    });

    // POST new seller
    app.post("/api/sellers", function(req,res){
        // may not be req.body. Check after AJAX Setup. Need to create object.
        db.Seller.create(req.body).then(function(dbSeller){
            res.json(dbSeller);
        })
    })




};