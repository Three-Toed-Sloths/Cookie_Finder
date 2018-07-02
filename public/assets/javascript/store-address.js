function getAddr(lat, lng){
    
    const geocoder2 = new google.maps.Geocoder();
    geocoder2.geocode({'location': {lat: lat, lng: lng}},
      function(results, status){
          const address = results[0].formatted_address;

            $('#sellerLocation').text(address);
        });
};

$('#showAdd').on('click', function(){
    const id = parseInt($('.seller-info').attr('sellers-id'));

    $.get(`/api/sellers/${id}`, function(data){
        const lat = parseFloat(data.lat);
        const lng = parseFloat(data.lng);

        getAddr(lat, lng)
    })
});

$('#sellerLocation').ready(function() {
    $('#showAdd').trigger('click');
});