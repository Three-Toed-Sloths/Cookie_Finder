$(document).ready(function() {

    $('#subtotal').val()



    $('.add-to-cart').on('click', addToCart);

    function addToCart(){


        // const cartProduct = {
        //     cartProductId: $(this).data('id'),
        //     cartProductName: $(this).data('name'),
        //     cartProductPrice: parseInt($(this).data('price'))
        // }


        // console.log(cartProduct);

        // res.render('shopInv', cartProduct)
    
    
        event.preventDefault();

        const id = $(this).data('id');
        $.get('/api/products/' + id, function(data){
            const cartProduct = {
                cartProductId: id,
                cartProductName: data.product_name,
                cartProductPrice: parseInt(data.price)
            }
            console.log(cartProduct);
            
        });
    
    }



});