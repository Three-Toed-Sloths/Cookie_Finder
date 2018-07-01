
    //Functions for landing
    function initMap() {
      //create the map
      let map;
      let markers = [];
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 33.641558, lng: -117.844800},
        zoom: 6
      });
    
      geocoder1 = new google.maps.Geocoder();
      let pos = {};
      let state;
    
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        getState(pos,map,geocoder1,markers);
        });
      }else{
          pos = {
            lat: 33.641558,
            lng: -117.844800
          };
          getState(pos,map,geocoder1,markers);
      }       
    }
    
    function getState(pos,map,geocoder,markers){
    console.log(pos);
    map.setCenter(pos);
    map.setZoom(9);
    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
    geocoder.geocode({'location':pos},function(results,status){
    console.log(results);
        if(status === 'OK'){
          if(results[0]){
            const res = results[0].address_components;
            for(let i = 0; i<res.length; i++){
              for(let j = 0; j<res[i].types.length; j++){
                  if(res[i].types[j] === 'administrative_area_level_1'){
                      state = res[i].short_name;
                  }
              }
            }
            console.log(state);
            getSellers(state,map,markers);
          }
        }
      });
    }
    
    function getSellers(state,map,markers){
        let latLngArr = [];
        let namesArr = [];
        let emailArr = [];
        let idArr = [];
        $.get("/api/sellers/state/" + state, function(data){
            if(data){
                console.log(data);
                for(let i = 0; i<data.length; i++){
                    const latlngObj = {lat: data[i].lat, lng: data[i].lng};
                    latLngArr.push(latlngObj);
                    namesArr.push(data[i].seller_name);
                    emailArr.push(data[i].email);
                    idArr.push(data[i].id);
                }
            genAddresses(latLngArr,namesArr,emailArr,idArr,map,markers);
            }
    
        });
    }
    function genAddresses(latLngArr,namesArr,emailArr,idArr,map,markers){
        console.log(latLngArr);
        console.log(namesArr);
        console.log(emailArr);
        console.log(idArr);
        for(let i = 0; i<latLngArr.length; i++){
            console.log(latLngArr[i]);
            //HUGE PROBLEM, GOOGLE MAPS WILL NOT LET US GENERATE MORE THAN 4 REQUESTS at a time in one second!!! SO WE HAVE
            //A set time out function. But now first 4 markers show up right away, and rest show up lagging behind.
            //Error Over query limit. NEED THIS GEOCODING FOR ADDRESSES.
            const geocoder2 = new google.maps.Geocoder();            
            setTimeout(function(){
                    geocoder2.geocode({'location': {lat: parseFloat(latLngArr[i].lat), lng: parseFloat(latLngArr[i].lng)}}, function(results, status){
                    console.log(status);
                    if(status === 'OK'){
                        if(results[0]){
                            genMarkers(namesArr[i],emailArr[i],results[0].formatted_address,{lat: parseFloat(latLngArr[i].lat), lng: parseFloat(latLngArr[i].lng)},idArr[i],map,markers);
                        }
                    }
                });
            },1000 * i); 
        }
    
    }
    //inventory.handlebars
    function genMarkers(name,email,address, latlng,id, map,markers){
        const urlString = "/sellers/" + id;
        const content = '<div class="center" style="width: 270px;">'+
        '<h6 style="font-size: 24px">Seller Name: '+ name + '</h6>'+
        '<div id="bodyContent">'+
        '<h6>Email: '+ email + '</h6>' +
         '<h6>Address: <span id="address">' + address + '</span></h6>' +
         '<h6><a href="' +urlString+  '">Store Page</a></h6>' +
        '</div>'+
        '</div>';
        
        
        const infoWindow = new google.maps.InfoWindow({
            content: content
        });
        const marker = new google.maps.Marker({
            position: latlng,
            map: map
        });
        marker.addListener('click',function(){
            infoWindow.open(map,marker);
            map.setCenter(latlng);
            map.setZoom(14);
        });
        markers.push(marker);
        console.log("made it");
    }
initMap();
