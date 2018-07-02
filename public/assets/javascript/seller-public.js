$(document).ready(function() {

    $('#newSellerSubmit').on('click', handleNewSeller);

    function handleNewSeller(event){
        // event.preventDefault();
        const name = $('#newSellerName').val().trim();
        const state = $('#stateSelect').val().trim();
        const email = $('#newSellerEmail').val().trim();

        const newSeller = {
            seller_name: name,
            email: email,
            state: state,
            lat: 33.5136,
            lng: -117.7556
        }

        $.post('/api/sellers', newSeller);

    };
});