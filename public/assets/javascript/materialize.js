$(document).ready(function () {
    $('select').formSelect();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();
});

$("li").on("click", function () {

    $("li").removeClass("active");

    $(this).addClass("active");

});