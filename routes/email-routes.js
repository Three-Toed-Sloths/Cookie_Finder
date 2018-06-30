
require('dotenv').config();

module.exports = function(app){
    app.post("/order", function(req, res){
        
        const sellerInfo = req.body.sellerInfo;
        const cartList = req.body.cartList;
        const sellerId = req.body.sellerId;

        console.log(cartList);
        console.log(sellerInfo);
        console.log(sellerId);


        
        sendEmail(cartList);
        // $.get('/order', {sellerInfo});
    });



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



    function sendEmail(items){
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
        const msg = {
        to: 'nickclear22@gmail.com',
        from: 'cookiesellerproject@gmail.com',
        // subject: `${sellerName} - New Cookie Order`,
        // text: `${sellerName} - New Cookie Order`,
        subject: `New Cookie Order`,
        text: `Text of New Cookie Order`,
        html: `<h3>Incoming Order</h3><ul>${items}</ul>`,
        };
    
        sgMail.send(msg);
        console.log('email sent');
    }
 

  
};
