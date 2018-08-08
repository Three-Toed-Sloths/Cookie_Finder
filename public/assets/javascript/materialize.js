$(document).ready(function () {
    $('select').formSelect();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();
    $('input#input_text, textarea#textarea2').characterCounter();
});

$("li").on("click", function () {

    $("li").removeClass("active");

    $(this).addClass("active");

});