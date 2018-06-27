$(document).ready(function() {



    // Click listeners
    $('.sellerInventory').on('click', handleSellerInventory);
    $('.addInventory').on('click', handleAddInventory);
    $('.updateStock').on('click', handleUpdateStock);
    $('.deleteInventory').on('click', handleDeleteInventory);
        // Potential Click Listeners: add to order, remove from order







    // Check for seller value
    function handleSellerInventory(event){
        event.preventDefault();

        // val should be seller id (number)
        const sellerId = $('.sellerInventory').val().trim();
        
        if(!NaN(sellerId)){
            getSellerInventory(sellerId);
        } else {
            console.log('The sellerId val is not a number. see handleSellerInventory in inventory-public.js');
        }    
    };


    // Check details to add inventory
    function handleAddInventory(event){
        event.preventDefault();
        // who is the seller?
        // what product are they adding to sell?
        // call another function
    };

    // Check for type of update
    function handleUpdateStock(event){
        event.preventDefault();
            // what is the unique inventory id to update?
            // do you want to add or subtract stock?
            // how much do you want to +/-?
                // can we have user input -6 for remove 6 or 8 to add 8.
                // call another function
    };

        // Delete inventory (aka full product of a seller)
        function handleAddInventory(event){
            event.preventDefault();
            // what is the unique inventory id to delete?
            // call another function
        };


    // GET inventory by seller
    function getSellerInventory(id){
        const sellerId = id;
        $.get('/api/inventory/seller/' + sellerId, function(data){
            console.log(data);
                // we dont want to display stock.
                // need display product info
            for(let i = 0; i < data.length; i++){
                console.log(data[i]);
                console.log(data[i].Productid);
                const productId = data[i].Productid
    
                // do we need to call product functions to display product info?
                // module.exports?
                // viewProductByID(productID); (done for each id in loop)
            }
        });
        

    };


});