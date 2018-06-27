//create map
//ENTER A CITY
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: {lat: -34.397, lng: 150.644}
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
      geocodeAddress(geocoder, map);
    });
  }
//Pass city in address.
  function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        // var marker = new google.maps.Marker({
        //   map: resultsMap,
        //   position: results[0].geometry.location
        // });no marker at city position.
        //generate markers for locations in the city.
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
//marker code
//var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: 'Hello World!'
//   });
//myLatLng is an object of lat: and lng:
/* <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
    </script> */

//info window
// var contentString = 
//'<div id="content">'+
// <h1>Seller Name: put seller name here</h1>
// <h2>Hours Operation: Put hours of Operation here (if needed)</h2>
// <div>
// Put address information here.
//</div>
// '</div>';

// var infowindow = new google.maps.InfoWindow({
// content: contentString
// });

// var marker = new google.maps.Marker({
// position: uluru,
// map: map,
// title: 'Uluru (Ayers Rock)'
// });
// marker.addListener('click', function() {
// infowindow.open(map, marker);
// });

//CODE for customer

//First Get the City from the search bar
const city = $("#city-input").text();

//use geocoding service to get long and lats of this city for customer
function geocodeAddress(geocoder, map, city){
    geocoder.geocode({'address': city}, function(results, status){
        if(status === 'OK'){
            map.setCenter(results[0].geometry.location);
            //generate markers and show them.
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    })
}
//WE need seller city get lats and lng from database where city
//store them in an array of objects with lat, lng.

function genMarkers (city){
    //iterate through array of objects with lat,lng
    //create markers using var marker.
    //add animations when you mouseover show info.
    
}



