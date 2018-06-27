$(document).ready(function() {


    // Click listeners
    $('#viewProducts').on('click', viewProducts);
    $('.selectProduct').on('click', selectProduct);


    function selectProduct(event){
        event.preventDefault();

        // wherever we are selecting products we need to store the product ID as val or some datatype.
        // products should NOT be input. Products should be list.
        const productId = $('.selectProduct').val().trim();

        if(!productId) {
            return;
        } else {
            console.log(`Product ID ${ProductId}`);
            // call add to order function
            // ex) addToOrder(productId)
            // this may be in inventory logic.

        }
    }


    // View all products
    function viewProducts(event){
        event.preventDefault();
        $.get('/api/products', function(data){
            console.log(data);

            // where do you want sellers to appear?
            for(let i = 0; i < data.length; i++){
                console.log(data[i]);
                // add to a div to show all products
            }
        });
    };


});