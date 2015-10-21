import $ from 'jquery';
import 'slick-carousel';

//import owlCarousel from 'owl-carousel-2/owl.carousel.min.js';


$(() => {
	// Code here

    var $projectsSlider = $('.js-projects-slider'),
        $menuBtn = $('.js-menu-btn'),
        $menuClose = $('.js-close-menu'),
        $sliderMenu = $('.js-mobile-menu'),
        $body = $('body'),
        sliderMenuActive = 'slider__mobile-menu_show',
        windowWith = $(window).width(),
        isDestkop = windowWith >= 1150,
        alignSlider, resizeId;


    function mobileMenu() {
        var wHeight = $(window).height();

        this.show = function () {
            $sliderMenu.addClass(sliderMenuActive);
            $menuBtn.hide();
            $body.addClass('blocked')
                .css('height', wHeight + 'px');
        };

        this.hide = function () {
            $sliderMenu.removeClass(sliderMenuActive);
            $menuBtn.show();
            $body.removeClass('blocked')
                .css('height', '');
        }
    }

    var menu = new mobileMenu();

    $menuBtn.on('click', menu.show);

    $menuClose.on('click', menu.hide);

    alignSlider = function () {
        var $projectTitle = $('.js-project-title'),
            projectTitleOffsetLeft = $projectTitle.offset().left,
            activeLeft = $('.slick-current').find('.js-project-slider-item').offset().left,
            val;

        if (projectTitleOffsetLeft != activeLeft) {
            val = projectTitleOffsetLeft - activeLeft;

            $projectsSlider.animate({
                left: val + 'px'
            }, 500);

            console.log('align slider ' + val);
        }
    }

    $projectsSlider.on('init', function (event, slick){
        alignSlider();
        console.log('slider was initialized');
    });

    $(window).on('resize', function () {
        var windowWithNow = $(window).width();
        if (windowWith != windowWithNow) {
            clearTimeout(resizeId);
            resizeId = setTimeout(alignSlider, 1000);
        }

        if (isDestkop) {
            menu.hide();
        }


    });


    $('.js-slider').slick({
        prevArrow: $('.js-slider-prev'),
        nextArrow: $('.js-slider-next'),
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        responsive: {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }

    });

    $projectsSlider.slick({
        prevArrow: $('.js-project-btn-prev'),
        nextArrow: $('.js-project-btn-next'),
        centerMode: true,
        slidesToShow: 3,
        centerPadding: '1.6%',
        responsive:[
            {
                breakpoint: 1150,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                }
            },
        ]

    });
});
