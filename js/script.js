if ($('.banner-slider').length > 0) {
    var splide = new Splide('.banner-slider .splide', {
        arrows: false,
        pagination: true,
        autoplay: true,
        perPage: 1,
        type: 'loop',
    });
    splide.mount();
}

if ($('.product-slider').length > 0) {
    var productSplide = new Splide('.product-slider .splide', {
        arrows: true,
        pagination: false,
        perPage: 4,
        perMove: 3,
        gaperMove: 3,p: '33px',
        breakpoints: {
            1200: {
                perPage: 3,
                perMove: 2,
            },
            991: {
                perPage: 2,
                perMove: 1,
            },
            575: {
                perPage: 1,
                pagination: true,
            },
        }
    });
    productSplide.mount();
}

if ($('.blog-slider').length > 0) {
    var blogSplide = new Splide('.blog-slider .splide', {
        arrows: true,
        pagination: false,
        perPage: 4,
        perMove: 3,
        gap: '33px',
        breakpoints: {
            1200: {
                perPage: 3,
                perMove: 2,
            },
            991: {
                perPage: 2,
                perMove: 1,
            },
            575: {
                perPage: 1,
                pagination: true,
            },
        }
    });
    blogSplide.mount();
}

jQuery(function ($) {

    $(document).ready(function () {
        $('.hamburger-menu').click(function () {
            $(this).toggleClass('active');
            $(this).parent().toggleClass('nav-active');
            $('body').toggleClass('hamburger-active');
            $('body').find('.cart-active').removeClass('cart-active');
        });
        $('body').click(function (event) {
            if ($('body').hasClass('hamburger-active') && !$(event.target).closest('.nav-menu').length) {
                $('.hamburger-menu').toggleClass('active').parent().toggleClass('nav-active');
                $('body').toggleClass('hamburger-active');
            }
        });

    });


});




$(document).ready(function () {

    $(window).on('resize', function () {
        var home_category_margin = - ($('.home-category-section .container').width() - $(window).width()) / 2;
        $('.home-category-section').css('--container-offset', home_category_margin + 'px');
        var header_margin = - ($('.site-header .container').width() - $(window).width()) / 2;
        $('.cart-checkout-box').css('--container-offset', header_margin + 'px');
    }).trigger('resize');

});

$(document).ready(function () {

    $('.site-header .wishlist').click(function () {
        $(this).toggleClass('cart-active');
        $('.cart-checkout-box').toggleClass('cart-active');
    });

    $('.primary-menu li').children('.sub-menu').parent().addClass('menu-item-has-children');
    $(".primary-menu li.menu-item-has-children > a").append('<span class="dropdown-btn"><i class="fas fa-chevron-down"></i></span>');

    $('.dropdown-btn').on('click', function (event) {

        // Avoid following the href location when clicking

        event.preventDefault();

        // Avoid having the menu to close when clicking

        event.stopPropagation();

        // Re-add .open to parent sub-menu item

        $(this).parent().parent().toggleClass('open').first().siblings().removeClass('open');
        $(this).parent().parent().find("ul").parent().find("ul.sub-menu").first().slideToggle();
        $(this).parent().parent().siblings().find("ul.sub-menu").slideUp().parent().removeClass('open');

    });

});

/*Change Product listing View*/

$(document).ready(function () {
    var product_view = function () {
        var $this = $(this);
        var $product_item = $('.product-list .row > *');
        $this.addClass('active').siblings('.view').removeClass('active');
        if ($this.hasClass('grid-view')) {
            $product_item.attr('data-view', 'grid');
            $product_item.addClass('col-lg-3 col-md-6').removeClass('col-lg-6');
        }
        else if ($this.hasClass('list-view')) {
            $product_item.attr('data-view', 'list');
            $product_item.addClass('col-lg-6').removeClass('col-lg-3 col-md-6');
        }
    };
    $('.filter-view .view').on('click', product_view);
});


$(document).ready(function () {
    $('.product-swiper .img-holder').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var activeChildNumber = $(this).index() + 1;
        console.log(activeChildNumber);
        var x = - (activeChildNumber - 1) * 100;
        $('.product-gallery-img').css('transform', 'translateX(' + x + '%)');

        $('.product-gallery-img > .img-holder').each(function (index) {
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


// /* Sub-menu going off screen fixing Js*/

// $(document).ready(function () {


//     $(window).on('resize', function () {
//         if ($(window).width() > 767) {
//             var window_width = $(window).width();
//             $('.sub-menu').each(function (index, element) {
                
//                 var this_left = $(element).parent().offset().left + $(element).parent().width();
//                 var this_width = $(element).width();
//                 var right_position = this_left + this_width;
//                 if (right_position > window_width) {
//                     $(element).parent().addClass('sub-menu-left');
//                 }
//                 else if (this_left < 0) {
//                     $(element).parent().addClass('sub-menu-right');
//                 }
//                 else if (right_position < window_width) {
//                     $(element).parent().removeClass('sub-menu-left');
//                     $(element).parent().removeClass('sub-menu-right');
//                 }
//                 if($(element).parent().parent().hasClass('primary-menu')){
//                     $(element).addClass('first-sub-menu');
//                 }
//             });
//         }
//     }).trigger('resize');

// });
