$(document).ready(function () {
    $('select').formSelect();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
});

$("li").on("click", function () {

    $("li").removeClass("active");

    $(this).addClass("active");

});