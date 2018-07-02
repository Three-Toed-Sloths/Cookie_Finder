
$(document).ready(function() {
    
    
    // my goal is to have all click listeners in one spot for organizational purposes and clean code.
    // Click listeners
    $('#addSeller').click(handleNewSeller);
    $('.viewSellers').on('click', viewAllSellers);


    // Check new seller name
    function handleNewSeller(event){
        event.preventDefault();
        let sellerLat;
        let sellerLng;
        // input field # for newSeller form
        // const sellerInfo = $('#sellerName').val().trim();
        // check if works? (below)
        const sellerState = $("#state").val().trim();
        const addressString = $("#street-address").val().trim() + " " + 
        $("#city").val().trim() + " " + sellerState + " " + $("#zip-code").val().trim();
        console.log(addressString);
        const url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + addressString +"key=AIzaSyAkaGCzHFOeCKDvbU4HEjULslR9zeXeyQU";
        //use ajax to make a request to this url to get long and lat.
        $.get(url,function(data){
            console.log(data.results[0].geometry.location.lat);
            console.log(data.results[0].geometry.location.lng);
            sellerLat = data.results[0].geometry.location.lat;
            sellerLng = data.results[0].geometry.location.lng;
            //put this inside get request in order to keep the lat and lng.
            if(sellerInfo) {
                const newSellerObj = {
                    //need to add email, city, lat, lng
                    seller_name: sellerInfo,
                    email: sellerEmail,
                    city: sellerCity,
                    lat: latitude,
                    lng: longitude
                }
                newSeller(newSellerObj)
            }

        });
        
        // goal is; to check if sellerInfo is empty string or not.
        // I believe empty strings are falsey
        // may need to have (sellerInfo === '')
        // if(!sellerInfo){
        //     return;
        //     // will also have to add an else if for repeated names
        //     // if a new seller name already exists, we must alert seller name already taken
        //         // this is where usernames would come in handy.
        // } else {
        //     const newSellerObj = {
        //         name: sellerInfo
        //     }
        //     newSeller(newSellerObj);
        // };

       
        
    };

    // CREATE new seller request
    function newSeller(sellerData){
        $.post('/api/sellers', sellerData)
          .then(function(data){
            console.log(data);
              //could also call getAllSellers() to trigger new seller population.
              // .then(viewAllSellers);
          });
    };

    // GET all sellers for view
    function viewAllSellers(){
        $.get('/api/sellers', function(data){
            console.log(data);

            // where do you want sellers to appear?
            for(let i = 0; i < data.length; i++){
                console.log(data[i]);
                // add to a div to show all sellers
            }
        });
    };


    // View seller by id
    function viewSellerById(id){
        if(!isNaN(id)){
            const sellerId = id;
            $.get('/api/sellers/' + sellerId, function(data){
                console.log(data);
    
                for(let i = 0; i < data.length; i++){
                    console.log(data[i]);
                    // add to a div to show seller name
                }
            });
        }
    };



});