$(function(){
 'use strict';
    
    
    // Menu js start
    var mahidul = $(".main_menu").offset().top;
    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > mahidul) {
            $(".main_menu").addClass("menu_fixed");
        } else {
            $(".main_menu").removeClass("menu_fixed");
        }
    });

    
$('.test_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
    dots: true,
  autoplaySpeed: 2000,
    arrows: false,
});
    
    
});