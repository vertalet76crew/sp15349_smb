import $ from 'jquery';
import 'owl.carousel';

function partnersCarousel() {
    const $slider = $('[data-carousel="partners"]');
    const options = {
        nav: false,
        dots: true,
        smartSpeed: 2000,
        startPosition: 0,
        fluidSpeed: 2000,
        dotsSpeed: 2000,
        dragEndSpeed: 1000,
        autoWidth: false,
        responsiveClass: true,
        margin: 20,
        items: 1,
        center: false,
        loop: false,
        responsive: {
            767: {
                autoWidth: true
            }
        }
    };

    $(window).on('load resize', function() {
        const checkWidth = $(window).width();
        if (checkWidth > 1019) {
            if (typeof $slider.data('owl.carousel') != 'undefined') {
                $slider.data('owl.carousel').destroy();
            }
            $slider.removeClass('owl-carousel');
            $slider.addClass('owl-off');
        } else if (checkWidth < 1020) {
            $slider.addClass('owl-carousel');
            $slider.owlCarousel(options);
            $slider.removeClass('owl-off');
        }
    });
}

export default partnersCarousel;
