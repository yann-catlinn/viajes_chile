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