$(document).ready(function() {


    // my goal is to have all click listeners in one spot for organizational purposes and clean code.
    // Click listeners
    $('#addSeller').on('click', handleNewSeller);








    // Check new seller name
    function handleNewSeller(event){
        event.preventDefault();

        // input field # for newSeller form
        const sellerInfo = $('#sellerName').val().trim();

        // check if works? (below)
        // goal is to check if sellerInfo is empty string or not.
        // may need to have (sellerInfo === '')
        if(!sellerInfo){
            return;
            // will also have to add an else if for repeated names
            // if a new seller name already exists, we must alert seller name already taken
                // this is where usernames would come in handy.
        } else {
            const newSellerObj = {
                name: sellerInfo
            }
            newSeller(newSellerObj);
        };
        
    };

    // CREATE new seller request
    function newSeller(sellerData){
        $.post('/api/sellers', sellerData)
          .then(function(data){
            console.log(data);
              //could also call getAllSellers() to trigger new seller population.
              // .then(getAllSellers);
          });
    };

    // GET all sellers for view
    function getAllSellers(){
        $.get('/api/sellers', function(data){
            console.log(data);

            // where do you want sellers to appear?
            for(let i = 0; i < data.length; i++){
                console.log(data[i]);
                // add to a div to show all sellers
            }
        });
    };

    
});