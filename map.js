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
        // var main_marker = new google.maps.Marker({
        //   map: resultsMap,
        //   position: results[0].geometry.location
        // });no marker at city position.
        //generate markers for locations in the city.
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

//myLatLng is an object of lat: and lng:
/* <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkaGCzHFOeCKDvbU4HEjULslR9zeXeyQU&callback=initMap">
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

//==================================================================================================================
//CODE for customer

//First Get the City from the search bar and get address
const cityState = $("#city-input").val()+","+$("#state-input").val();
const street = $("#street-input").val();
const zip = $("#zipcode-input").val();
const markers = [];
function initMap(){
  //default location
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });
  var geocoder = new google.maps.Geocoder();
  geocodeAddressCustomer(geocoder, map, cityState);
}
//When seller makes her store, convert into lat/long and store into database
function geocodeAddressSeller(address){
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': address}, function(results, status){
    if(status === 'OK'){
      //post latlng results[0].geometry.location.lat, lng
      //need front end.
    }
  })
}

//use geocoding service to get long and lats of this city for customer from database
function geocodeAddressCustomer(geocoder, map, cityState){
    geocoder.geocode({'address': cityState}, function(results, status){
        if(status === 'OK'){
            map.setCenter(results[0].geometry.location);
          // generate markers and show them.
            $.get("/api/sellers/city/" + cityState, function(data){
            console.log(data)
            let latLngArr = [];
            let nameArr = [];
            for(let i = 0; i<data.length; i++){
            const latLngObj ={lat: data[i].lat, lng: data[i].lng}
            latLngArr.push(latLngObj);
            nameArr.push(data[i].seller_name);
            }
          });
          genMarkers(latLngArr, geocoder,nameArr,map);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    })
}


//WE need seller city get lats and lng from database where city
//store them in an array of objects with lat, lng.

function genMarkers (latlngArr,geocoder, nameArr, map){
  //reverse geocoding latlng array to show addresses.
  const arrAddresses = [];
  for(let i = 0; i<latlngArr.length; i++){
    geocoder.geocode({'location': latlngArr[i]}, function(results,status){
      if(status === 'OK'){
        //get formatted addresses for display
        arrAddress.push(results[0].formatted_address);
      }
    });
  }
  //stored addresses in arrAddress
  //iterate through array of objects with lat,lng add hours of operation
  for(let m = 0; m<latlngArr.length; i++){
    //content
    const contString='<div id="content">'+
    '<h1>Seller Name: '+ nameArr[i] + '</h1>'+
    '<div id="bodyContent">'+
    '<h2>Hours of Operation: </h2>'+
     '<h3>Address: ' + arrAddresses[i] + '</h3>' +
    '</div>'+
    '</div>';
    //info window
    const infowindow = new google.maps.InfoWindow({
      content: contString
    });
    //marker
    const marker = new google.maps.Marker({
      position: latlngArr[i],
      map: map
    });
    //marker hover functions
    marker.addListener('mouseenter',function(){
      infowindow.open(map,marker);
    });
    marker.addListener('mouseout',function(){
      infowindow.close(map,marker);
    });
    markers.push(marker);
  }
}
//a function to remove markers if we need to.
function removeMarkers(map){
  for(var i = 0; i<markers.length; i++){
    markers[i].setMap(map);
  }
  markers = [];
}


