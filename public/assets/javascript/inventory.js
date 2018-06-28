$(document).ready(function () {

    // adds a range bar for checked cookies and removes range bar for unchecked cookies
    
    $("#cookies-selector div ul li").on("click", function(){ 

        $(this).attr("id",);
        let selectedCookie = $(this).find("span label span").text();  
        let cookieID = $(this).attr("id");
        let cookieQuantity = $()
        let rangeBar = `<form action="#" id=1${cookieID}><p class="range-field">Quantity of ${selectedCookie}<input type="range" min="1" max="50" value="1" /></p></form>`;
              
        

        if ( $(this).attr("class") === "selected" ){

            $(rangeBar).appendTo("#Cookie-Quantity");
        }else {
            $(`#1${cookieID}`).remove();
            
            console.log(selectedCookie);
        };

    });

    

});