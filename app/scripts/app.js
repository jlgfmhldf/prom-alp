import $ from 'jquery';
import 'slick-carousel';

//import owlCarousel from 'owl-carousel-2/owl.carousel.min.js';


$(() => {
	// Code here

    var $projectsSlider = $('.js-projects-slider'),
        $projectTitle = $('.js-project-title'),
        windowWith = $(window).width(),
        isMobile = windowWith >= 640,
        alignSlider, resizeId;

    console.log(windowWith)

    if (isMobile) {
        alignSlider = function () {
            var $projectTitle = $('.js-project-title'),
                projectTitleOffsetLeft = $projectTitle.offset().left,
                activeLeft = $('.slick-center').find('.js-project-slider-item').offset().left,
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
            clearTimeout(resizeId);
            resizeId = setTimeout(alignSlider, 500);
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
            //{
            //    breakpoint: 1440,
            //    settings: {
            //        slidesToShow: 3,
            //    }
            //},
            {
                breakpoint: 640,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                }
            },
        ]

    });




    //
    //$projectsSlider.slick('setPosition', 140);


    //$projectsSlider.on('setPosition', function(event, slick, direction, setPosition){
    //    console.log(slick);
    //
    //    //alignSlider();
    //    // left
    //});
});
