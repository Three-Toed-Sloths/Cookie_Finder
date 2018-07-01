const db = require("../models");
require('dotenv').config();

module.exports = function(app){
    app.post("/order", function(req, res){
        
        const sellerId = req.body.sellerId;
        const products = req.body.cartList;
        const price = req.body.totalPrice;

        db.Seller.findOne({
                where: {
                    id: sellerId
                }
        }).then(data => {
            const seller = data.dataValues

            const name = seller.seller_name;
            const email = seller.email;
            const city = seller.city;
              
            sendEmail(email, products, name, price);
        });
            // res.render('order', dbSellers));
   


    });


 
    app.get('/order', function(req, res){
        res.render('order');
    });

};


function sendEmail(email, products, name, price){
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
    to: email,
    from: 'cookiesellerproject@gmail.com',
    subject: `${name} - New Cookie Order`,
    text: `${name} - New Cookie Order`,
    html: `<h1>Hi ${name}!</h1>
        <h3>Incoming Order</h3>
        <ul>${products}</ul>
        <h3>Total Price: $${price}</h3>`,
    };

    sgMail.send(msg);
    console.log('email sent');
}