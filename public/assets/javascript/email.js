
$(document).ready(function() {


  $('#checkout').on('click', checkOut);


    function checkOut(){
      event.preventDefault();

      const sellerInfo = $('.seller-info').html().trim();
      const sellerName = $('#sellerName').text().trim();
      const cartList = $('#cartList').html().trim();
      const sellerId = $('.seller-info').attr('sellers-id').trim();
      const totalPrice = $('#cartTotal').text().trim();



      $.post('/order', {cartList, sellerInfo, sellerName, sellerId, totalPrice});
    
      // const test = $.get(`/api/sellers/1`);
      
      // console.log(test);

    }

});