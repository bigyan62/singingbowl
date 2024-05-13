jQuery(function ($) {

    $(document).ready(function () {
        $('.hamburger-menu').click(function () {
            $(this).toggleClass('active');
            $('body').toggleClass('nav-active');
        });


    });
      

});

var splide = new Splide('.banner-slider .splide', {
    arrows: false,
    pagination: true,
    autoplay: true,
    perPage: 1,
    type: 'loop',
});
splide.mount();

var productSplide = new Splide('.product-slider .splide', {
    arrows: true,
    pagination: false,
    perPage: 4,
    perMove: 1,
    type: 'loop',
    gap: '33px',
});
productSplide.mount();


$(document).ready(function () {

    $(window).on('resize', function() {
        var margin = - ($('.home-category-section .container').width() - $(window).width()) / 2;
        $('.home-category-section').css('--container-offset', margin + 'px');
    }).trigger('resize');

});