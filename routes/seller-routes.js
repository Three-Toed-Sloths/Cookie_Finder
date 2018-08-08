const db = require('../models');

module.exports = function(app){
    // GET all sellers
    app.get('/api/sellers', function(req, res){
        db.Seller.findAll({}).then(dbSellers => res.json(dbSellers));
    });

    // GET seller by ID
    app.get('/api/sellers/:id', function(req, res) {
        db.Seller.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Products]

        }).then(dbSellers => res.json(dbSellers));
    });

    // GET seller by state
    app.get("/api/sellers/state/:state", function(req, res) {
        db.Seller.findAll({
            where: {
                state: req.params.state
            }
        }).then(dbSellers => res.json(dbSellers));
    });

    // POST new seller
    app.post('/api/sellers', function(req,res){
        db.Seller.create(req.body)
          .then(dbSellers => res.json(dbSellers));
    });

    app.get('/sellers/:id', function(req, res) {
        db.Seller.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Products]
    
        }).then(dbSellers => {
                
            const productArr = [];
            const sellerInfo = dbSellers.dataValues;

            for(let i = 0; i < sellerInfo.Products.length; i++){

                const productInfo = sellerInfo.Products[i].dataValues;
                const productInvInfo = productInfo.Inventory.dataValues;

                const product = {
                    id: sellerInfo.id,
                    sellerName: sellerInfo.seller_name,
                    sellerState: sellerInfo.state,
                    sellerLat: sellerInfo.lat,
                    sellerLng: sellerInfo.lng,
                    productId: productInfo.id,
                    productName: productInfo.product_name,
                    price: productInfo.price,
                    description: productInfo.description,
                    stock: productInvInfo.stock
                }
                productArr.push(product);
            }
            res.render('shopInv', {productArr})
        });
    });
};