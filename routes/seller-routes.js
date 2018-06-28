const db = require("../models");

module.exports = function(app){
    // GET all sellers
    app.get("/api/sellers", function(req, res){
        db.Seller.findAll({}).then(dbSellers => res.json(dbSellers));
    });

    // GET seller by ID
    app.get("/api/sellers/:id", function(req, res) {
        db.Seller.findOne({
            where: {
                id: req.params.id
            },
            // allows to see what products they are selling and how much
            include: [db.Products]

        }).then(dbSellers => res.json(dbSellers));
        
    });

    // GET seller by city
    app.get("/api/sellers/city/:city", function(req, res) {
        db.Seller.findAll({
            where: {
                city: req.params.city
            }
        }).then(dbSellers => res.json(dbSellers));
    });


    // POST new seller
    app.post("/api/sellers", function(req,res){
        // may not be req.body. Check after AJAX Setup. Need to create object.
        db.Sellers.create(req.body)
          .then(dbSellers => res.json(dbSellers));
    });




};