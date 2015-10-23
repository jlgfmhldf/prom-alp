import $ from 'jquery';
import 'slick-carousel';

$(() => {

    var $projectsSlider = $('.js-projects-slider'),
        $menuBtn = $('.js-menu-btn'),
        $menuClose = $('.js-close-menu'),
        $sliderMenu = $('.js-mobile-menu'),
        $container = $('.js-container'),
        $body = $('body'),
        sliderMenuActive = 'slider__mobile-menu_show',
        windowWith = $(window).width(),
        mobileWith = 1150;


    function mobileMenu() {
        var wHeight = $(window).height();

        function preventDefault(e) {
            e.preventDefault();
        }


        this.show = function () {
            $sliderMenu.addClass(sliderMenuActive);
            $menuBtn.hide();

            $body.on('touchmove.body', preventDefault).addClass('no-scroll');

        };

        this.hide = function () {
            $sliderMenu.removeClass(sliderMenuActive);
            $menuBtn.show();

            $body.off('touchmove.body').removeClass('no-scroll');

        }
    }

    var menu = new mobileMenu();

    $menuBtn.on('click', menu.show);

    $menuClose.on('click', menu.hide);

    $(window).on('resize', function () {
        var windowWith = $(window).width();

        if (windowWith > mobileWith) {
            menu.hide();
        }
    });

    $('.js-slider').slick({
        prevArrow: $('.js-slider-prev'),
        nextArrow: $('.js-slider-next'),
        speed: 500,
        infinite: true,
        slidesToShow: 1
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
                    slidesToShow: 1
                }
            },
        ]

    });
});
