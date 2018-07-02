$(document).ready(function() {

  $('#checkout').on('click', checkOut);


  function checkOut(){

    const cartList = $('#cartList').html().trim();
    const buyer = $('#buyer').val().trim();
    const buyEmail = $('#buyerEmail').val().trim();
    const address = $('#sellerLocation').text().trim();

    if(!cartList || !buyer || !buyEmail){
      event.preventDefault();
    } else {
      const sellerId = $('.seller-info').attr('sellers-id').trim();
      const totalPrice = $('#cartTotal').text().trim();

      $.post('/order', {cartList, sellerId, totalPrice, buyer, buyEmail, address});
    }

  }

});