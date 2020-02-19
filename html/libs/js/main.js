$(document).ready(function() {
    $(window).resize(function() {
        var x = $(window).width();
        console.log(x);
    });
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true
    });
    $('.btn-sch').on('click', function() {
        $(this).parent('.nav-item').find('.search').css {
            "display",
            "block"
        }
    });
});