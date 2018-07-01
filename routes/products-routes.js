const db = require('../models');

module.exports = function(app){

    // GET all products
    app.get('/api/products', function(req,res){
        db.Products.findAll({})
        .then(dbProducts => res.json(dbProducts));
    });

    // GET product by ID
    app.get('/api/products/:id', function(req, res) {
        db.Products.findOne({
            where: {
                id: req.params.id
            },
            // allows to see who is selling the products and how much
            include: [db.Seller]

        }).then(dbProducts => res.json(dbProducts));
    });


    // POST new products (may not need)
    app.post('/api/products', function(req, res){
        db.Products.create(req.body)
         .then(dbProducts => res.json(dbProducts));
    });

    // DELETE product
    app.delete('/api/products/:id', function(req, res) {
        db.Products.destroy({
        where: {
            id: req.params.id
        }
        }).then(dbProducts => res.json(dbProducts));
    });

    // UPDATE products
    app.put('/api/products', function(req, res) {
        db.Products.update(
        req.body,
        {
            where: {
              id: req.body.id
            }
        }).then(dbProducts => res.json(dbProducts));
    });





    //display products
    app.get('/signup', function(req, res) {
        db.Products.findAll({}).then(dbProducts => {

            const productArr = [];

            for(let i = 0; i < dbProducts.length; i++){

                const productInfo = dbProducts[i].dataValues;

                const product = {
                    id: productInfo.id,
                    name: productInfo.product_name,
                    price: productInfo.price,
                    description: productInfo.description,
                }
                productArr.push(product);
            }

            res.render('inventory', {productArr})
        });
    });
};