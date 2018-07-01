$(document).ready(function() {
    
    $('.add-to-cart').on('click', addToCart);



    function addToCart(){
        event.preventDefault();

        const id = $(this).data('id');
        $.get('/api/products/' + id, function(req,res){
            const cartProduct = {
                id: id,
                name: req.product_name,
                price: parseInt(req.price)
            }

            let cartSubTotal = parseInt($('#cartSubTotal').text());
           
            cartSubTotal += cartProduct.price;

            const tax = 0.0725;
            let cartTaxTotal = (cartSubTotal * tax).toFixed(2);
            let cartTotal = (cartSubTotal * (1+tax)).toFixed(2);

            $('#cartList').append('<li>' + cartProduct.name + ' - $' + cartProduct.price + '</li>');
            $('#cartTaxTotal').text(cartTaxTotal);
            $('#cartSubTotal').text(cartSubTotal.toFixed(2));
            $('#cartTotal').text(cartTotal);

        });
    
    }



});