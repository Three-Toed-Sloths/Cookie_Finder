const db = require("../models");

module.exports = function(app){


    // POST new user
    app.post("/api/users", function(req, res){
        db.Products.create(req.body).then(function(dbUser){
            res.json(dbUser)
        });
    });

    // DELETE user
    app.delete("/api/user/:id", function(req, res) {
        db.Products.destroy({
        where: {
            id: req.params.id
        }
        }).then(function(dbUser) {
        res.json(dbUser);
        });
    });

    // UPDATE user info
    app.put("/api/user", function(req, res) {
        db.Products.update(
        req.body,
        {
            where: {
            id: req.body.id
            }
        }).then(function(dbUser) {
        res.json(dbUser);
        });
    });

};