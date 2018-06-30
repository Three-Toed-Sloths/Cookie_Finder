
$(document).ready(function() {

  // require('dotenv').config();

  $('#checkout').on('click', checkOut);


    function checkOut(){
      event.preventDefault();

      
      const cartList = $('#cartList').html().trim();
      console.log(cartList);
      // sendEmail(sellerEmail, sellerName);
      // sendEmail(cartList);


      $.post('/order', {cartList});


    }


  // function sendEmail(list){
  
  // };

  // function sendEmail(cartList){
  //   const sgMail = require('@sendgrid/mail');
  //   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  //   const msg = {
  //     to: 'nickclear22@gmail.com',
  //     from: 'cookiesellerproject@gmail.com',
  //     // subject: `${sellerName} - New Cookie Order`,
  //     // text: `${sellerName} - New Cookie Order`,
  //     subject: `New Cookie Order`,
  //     text: `Text of New Cookie Order`,
  //     // html: '<strong>Bring the cookies in!</strong>',
  //     html: `<ul>${cartList}</ul>`,
  //   };
  
  //   sgMail.send(msg);

  // }

  

});