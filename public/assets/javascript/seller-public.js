$(document).ready(function() {

    $('#submit-seller').on('click', handleNewSeller);
  
    function handleNewSeller(event){

        const name = $('#newSellerName').val().trim();
        const state = $('#stateSelect').val().trim();
        const email = $('#newSellerEmail').val().trim();

        const address = $("#street-address").val().trim() + " " + 
        $("#city").val().trim() + " " + state + " " + $("#zip-code").val().trim();
        
        if(!name || !state || !email || !address){
            event.preventDefault();
        } else {

            const url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address +"key=AIzaSyAkaGCzHFOeCKDvbU4HEjULslR9zeXeyQU";

            $.get(url).done(function(data){

                let sellerLat = data.results[0].geometry.location.lat;
                let sellerLng = data.results[0].geometry.location.lng;

                const newSeller = {
                    seller_name: name,
                    email: email,
                    state: state,
                    lat: sellerLat,
                    lng: sellerLng
                }
                $.post('/api/sellers', newSeller);
            });
        }
    };
});