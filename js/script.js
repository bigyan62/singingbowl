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

if($('.blog-slider').length > 0){
    var blogSplide = new Splide('.blog-slider .splide', {
        arrows: true,
        pagination: false,
        perPage: 4,
        perMove: 1,
        type: 'loop',
        gap: '33px',
    });
    blogSplide.mount();
    }

$(document).ready(function () {

    $(window).on('resize', function() {
        var home_category_margin = - ($('.home-category-section .container').width() - $(window).width()) / 2;
        $('.home-category-section').css('--container-offset', home_category_margin + 'px');
        var header_margin = - ($('.site-header .container').width() - $(window).width()) / 2;
        $('.cart-checkout-box').css('--container-offset', header_margin + 'px');
    }).trigger('resize');

});

$(document).ready(function () {
    $('.site-header .wishlist').click(function(){
        $(this).toggleClass('cart-active');
        $('.cart-checkout-box').toggleClass('cart-active');
    });
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


$(document).ready(function () {
    $('.product-swiper .img-holder').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var activeChildNumber = $(this).index() + 1;
        console.log(activeChildNumber);
        var x = - (activeChildNumber-1) * 100;
        $('.product-gallery-img').css('transform', 'translateX(' + x + '%)');

        $('.product-gallery-img > .img-holder').each(function(index) {
            if (index + 1 === activeChildNumber) {
                $(this).addClass('active');
                console.log('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
});


/*END Product listing view */