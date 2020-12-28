import $ from 'jquery';
import 'owl.carousel';

function partnersCarousel() {
    const $slider = $('[data-carousel="partners"]');

    if ($slider.length) {
        $slider.owlCarousel({
            nav: false,
            dots: true,
            smartSpeed: 2000,
            startPosition: 1,
            loop: true,
            fluidSpeed: 2000,
            dotsSpeed: 2000,
            dragEndSpeed: 1000,
            responsive: {
                320: {
                    autoWidth: false,
                    responsiveClass: true,
                    margin: 20,
                    items: 1,
                    center: true,
                    loop: false
                },
                1020: {
                    autoWidth: false,
                    responsiveClass: true,
                    margin: 35,
                    items: 3,
                    center: true,
                    loop: true
                },
                1360: {
                    autoWidth: false,
                    responsiveClass: true,
                    items: 3,
                    center: true,
                    margin: 47,
                    loop: true
                }
            }
        });
    }
}

export default partnersCarousel;
