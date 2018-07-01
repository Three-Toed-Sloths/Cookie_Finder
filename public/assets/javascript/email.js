$(document).ready(function() {

  $('#checkout').on('click', checkOut);


  function checkOut(){

    const cartList = $('#cartList').html().trim();

    if(!cartList){
      event.preventDefault();
    } else {
      const sellerId = $('.seller-info').attr('sellers-id').trim();
      const totalPrice = $('#cartTotal').text().trim();
      $.post('/order', {cartList, sellerId, totalPrice});
    }

    // $.get('/order', sellerId);


    // if we make a input field for customer name and email we can send email to customer too.
  }

});