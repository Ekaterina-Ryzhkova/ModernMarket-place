$(function(){

    var mixer = mixitup('.products__inner-box');

    $('.product-slider__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });

});