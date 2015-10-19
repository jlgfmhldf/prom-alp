import $ from 'jquery';
import 'slick-carousel';

//import owlCarousel from 'owl-carousel-2/owl.carousel.min.js';


$(() => {
	// Code here

    var $projectsSlider = $('.js-projects-slider'),
        windowWith = $(window).width(),
        isDestkop = windowWith >= 640,
        alignSlider, resizeId;

    console.log(windowWith)

    if (isDestkop) {
        alignSlider = function () {
            var $projectTitle = $('.js-project-title'),
                projectTitleOffsetLeft = $projectTitle.offset().left,
                activeLeft = $('.slick-current').find('.js-project-slider-item').offset().left,
                val;

            val = projectTitleOffsetLeft - activeLeft;

            $projectsSlider.animate({
                left: val + 'px'
            }, 500);

            console.log('align slider ' + val);
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

        })

    }

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
                breakpoint: 640,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                }
            },
        ]

    });
});
