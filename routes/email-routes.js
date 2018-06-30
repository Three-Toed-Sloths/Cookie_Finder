
require('dotenv').config();

module.exports = function(app){
    app.post("/order", function(req, res){
        
        const cartList = req.body.cartList;
        console.log(cartList);

        sendEmail(cartList);



        // res.render('order');
    });

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
