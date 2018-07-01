
require('dotenv').config();

module.exports = function(app){
    app.post("/order", function(req, res){
        
        const sellerInfo = req.body.sellerInfo;
        const sellerName = req.body.sellerName;
        const cartList = req.body.cartList;
        const sellerId = req.body.sellerId;
        const totalPrice = req.body.totalPrice;

        console.log(cartList);
        console.log(sellerInfo);
        console.log(sellerId);
        console.log(sellerName);


     
        
        sendEmail(cartList, sellerName, totalPrice);



    });

    // const testInfo = app.get(`api/sellers/${sellerId}`);


    // app.get('/order', function(req, res){
    //     const sellerInfo = req.body.sellerInfo;
    //     console.log(req.body)
    //     // res.render('order', {sellerInfo});
    // })

 
    app.get('/order', function(req, res){
        // console.log(req.body);
        res.render('order');
        // res.render('order', {sellerInfo});
    })



    function sendEmail(items, name, price){
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
        const msg = {
        to: 'nickclear22@gmail.com',
        from: 'cookiesellerproject@gmail.com',
        subject: `${name} - New Cookie Order`,
        text: `${name} - New Cookie Order`,
        html: `<h1>Hi ${name}!</h1>
            <h3>Incoming Order</h3>
            <ul>${items}</ul>
            <h3>Total Price: $${price}</h3>`,
        };
    
        sgMail.send(msg);
        console.log('email sent');
    }
 

  
};
