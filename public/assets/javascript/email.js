
$(document).ready(function() {


  $('#checkout').on('click', checkOut);


    function checkOut(){
      // event.preventDefault();

      const sellerInfo = $('.seller-info').html().trim();
      const cartList = $('#cartList').html().trim();

      const sellerId = $('.seller-info').attr('sellers-id').trim();
      console.log(sellerId);


      // console.log(cartList);


    //  const seller = {sellerInfo};


      // sendEmail(sellerEmail, sellerName);
      // sendEmail(cartList);


      $.post('/order', {cartList, sellerInfo, sellerId});
      // $.get('/order', {sellerInfo});
      // $.get('/order', function(){
      //   console.log('yip yip');
      // });
   

    }

});