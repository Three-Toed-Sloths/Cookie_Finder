$(document).ready(function () {
    $('select').formSelect();
    $('.sidenav').sidenav();
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();
});

$("li").on("click", function () {

    $("li").removeClass("active");

    $(this).addClass("active");

});