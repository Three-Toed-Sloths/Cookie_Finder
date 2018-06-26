$(document).ready(function () {
    $('select').formSelect();
    $('.sidenav').sidenav();
});

$("li").on("click", function () {

    $("li").removeClass("active");

    $(this).addClass("active");

});