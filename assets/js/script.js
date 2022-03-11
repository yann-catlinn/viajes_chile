$(function() {
    $(window).scroll(function() {
        var topNav = $(".navbar");
        if ($(this).scrollTop() > 100) {
            topNav.css("background", "#0dcaf0");
        } else {
            topNav.css("background", "none");
        }
    });
});

$(document).ready(function() {
    $("a").click(function() {
        var gato = this.hash;

        $("html, body").animate({
                scrollTop: $(gato).offset().top - 100,
            },
            800
        );
    });
});

var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});