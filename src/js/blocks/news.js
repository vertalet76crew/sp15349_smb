import $ from 'jquery';
import 'owl.carousel';

function newsCarousel() {
    const $slider = $('[data-carousel="news"]');

    if ($slider.length) {
        $slider.owlCarousel({
            nav: false,
            dots: false,
            loop: false,
            autoWidth: true,
            responsiveClass: true,
            margin: 0,
            items: 1,
            smartSpeed: 700,
            stagePadding: 20
        });
    }
}

export default newsCarousel;
