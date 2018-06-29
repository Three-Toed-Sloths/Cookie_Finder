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






    app.get("/", function(req, res){
        db.Seller.findAll({}).then(dbSellers => {
            const sellerArr = [];
            for(let i = 0; i < dbSellers.length; i++){
                let sellerInfo = dbSellers[i].dataValues;

                const seller = {
                    name: sellerInfo.seller_name,
                    city: sellerInfo.city
                }
                sellerArr.push(seller)
                // console.log(seller)
            }
            console.log(sellerArr);
            res.render('store', sellerArr);
        })
    });


   
    app.get("/sellers/:id", function(req, res) {
            db.Seller.findOne({
                where: {
                    id: req.params.id
                },
                // allows to see what products they are selling and how much
                include: [db.Products]
    
            }).then(dbSellers => {

                const sellerInfo = dbSellers.dataValues
                const productInfo = sellerInfo.Products[0].dataValues;
                const productInvInfo = productInfo.Inventory.dataValues;

                // const product = {
                //     sellerName: sellerInfo.seller_name,
                //     productName: productInfo.product_name,
                //     price: productInfo.price,
                //     description: productInfo.description,
                //     stock: productInvInfo.stock
                // }
                const productArr = [];
                const product = {
                    id: sellerInfo.id,
                    sellerName: sellerInfo.seller_name,
                    sellerCity: sellerInfo.city,
                    productId: productInfo.id,
                    productName: productInfo.product_name,
                    price: productInfo.price,
                    description: productInfo.description,
                    stock: productInvInfo.stock
                }

                productArr.push(product);
                console.log(productArr);


                res.render('shopInv', {productArr})
            });
            
    });


};