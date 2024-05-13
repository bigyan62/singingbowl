jQuery(function ($) {

    $(document).ready(function () {
        $('.hamburger-menu').click(function () {
            $(this).toggleClass('active');
            $('body').toggleClass('nav-active');
        });


    });
      

});


if($('.banner-slider').length > 0){
var splide = new Splide('.banner-slider .splide', {
    arrows: false,
    pagination: true,
    autoplay: true,
    perPage: 1,
    type: 'loop',
});
splide.mount();
}

if($('.product-slider').length > 0){
var productSplide = new Splide('.product-slider .splide', {
    arrows: true,
    pagination: false,
    perPage: 4,
    perMove: 1,
    type: 'loop',
    gap: '33px',
});
productSplide.mount();
}

$(document).ready(function () {

    $(window).on('resize', function() {
        var margin = - ($('.home-category-section .container').width() - $(window).width()) / 2;
        $('.home-category-section').css('--container-offset', margin + 'px');
    }).trigger('resize');

});

/*Change Product listing View*/

$(document).ready(function () {
    var product_view = function(){
        var $this = $(this);
        var $product_item = $('.product-list .row > *');
        $this.addClass('active').siblings('.view').removeClass('active');
        if($this.hasClass('grid-view')){
            $product_item.attr('data-view','grid');
            $product_item.addClass('col-lg-3').removeClass('col-lg-6');
        }
        else if($this.hasClass('list-view')){
            $product_item.attr('data-view','list');
            $product_item.addClass('col-lg-6').removeClass('col-lg-3');
        }
    };
    $('.filter-view .view').on('click', product_view);
});

/*END Product listing view */