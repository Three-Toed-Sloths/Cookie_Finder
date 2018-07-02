const db = require('../models');
require('dotenv').config();

module.exports = function(app){
    app.post('/order', function(req, res){
        
        const sellerId = req.body.sellerId;
        const products = req.body.cartList;
        const price = req.body.totalPrice;
        const buyer = req.body.buyer;
        const buyEmail = req.body.buyEmail;
        const address = req.body.address;

        db.Seller.findOne({
                where: {
                    id: sellerId
                }
        }).then(data => {
            const stats = data.dataValues

            const seller = stats.seller_name;
            const email = stats.email;
            // const state = stats.state;
              
            sendSellerEmail(email, products, seller, buyer, price);
            sendBuyerEmail(buyEmail, products, seller, buyer, address, price);
        });
    });

    app.get('/order', function(req, res){
        res.render('order');
    });
};


function sendSellerEmail(email, products, seller, buyer, price){
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
    to: email,
    from: 'cookiesellerproject@gmail.com',
    subject: `${seller} - New Cookie Order`,
    text: `${seller} - New Cookie Order`,
    html: `<h1>Hi ${seller}!</h1>
        <h3>Incoming Order from ${buyer}</h3>
        <ul>${products}</ul>
        <h3>Total Price: $${price}</h3>`,
    };

    sgMail.send(msg);
    console.log('email sent to seller.');
}

function sendBuyerEmail(email, products, seller, buyer, location, price){
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
    to: email,
    from: 'cookiesellerproject@gmail.com',
    subject: `${buyer} - Cookie Order`,
    text: `${buyer} - Cookie Order`,
    html: `<h1>Hi ${buyer}!</h1>
        <h3>Thank you for the order</h3>
        <ul>${products}</ul>
        <p>Please go to: ${location} to pick up your order from ${seller}!</p>
        <h3>Total Price: $${price}</h3>`
    };

    sgMail.send(msg);
    console.log('email sent to buyer.');
}