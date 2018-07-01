
    // var noUiSlider = require("nouislider");

        // let rangeBar = `<form action="#" id=1${cookieID}><p class="range-field">Quantity of ${selectedCookie}<input type="range" min="1" max="50" value="1" /></p></form>`;
        // let rangeBar = `<div id="test-slider"></div>`;
        //  var rangeB = $("#test-slider");
        //  noUiSlider.create(rangeB, {
        //      start: 40,
        //      connect: "lower",
        //      range: {
        //          min: 0,
        //          max: 100
        //      }
        //  }); 
        
$(document).ready(function () {

    // adds a range bar for checked cookies and removes range bar for unchecked cookies
    
    $("#cookies-selector div ul li").on("click", function(){ 

        $(this).attr("id",);
        let selectedCookie = $(this).find("span label span").text();  
        let cookieID = $(this).attr("id");
        let cookieQuantity = $();
        let rangeBar = `<div class="row"><div class="input-field col s12 m6 id=1${cookieID}"><input value="1" id="cookiesNum" type="text" class="validate"><label class="active" for="cookiesNum">Boxes of ${selectedCookie}</label></div>`

        
        if ( $(this).attr("class") === "selected" ){
            console.log(selectedCookie);            
            $(rangeBar).appendTo("#Cookie-Quantity");
        }else {
            $(`#1${cookieID}`).remove();
            
            console.log(selectedCookie);
        };

    });

    

});