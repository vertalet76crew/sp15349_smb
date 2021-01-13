/** menu.js **/
import $ from 'jquery';

function menu(isMobile) {
    const $nav = $('[data-block="nav"]');
    const $menu = $('[data-block="menu"]');
    const $body = $('body');
    const $html = $('html');
    let baseClassesList = [];

    function closeMenu() {
        $nav.removeClass('nav_open');

        if (baseClassesList.length) {
            baseClassesList.forEach(element => {
                $menu.find('.'+ element +'_open')
                    .removeClass(element + '_open');
            });
            baseClassesList = [];
        }

        if (isMobile) {
            $html.removeClass('overflow-hidden');
        } else {
            $body.removeClass('overflow-hidden');
        }
    }

    $body.on('click', '[data-target="menu"]', function(e) {
        $nav.toggleClass('nav_open');

        if (isMobile) {
            $html.toggleClass('overflow-hidden');
        } else {
            $body.toggleClass('overflow-hidden');
        }

        e.preventDefault();
    });

    $(document).on('click', function(e) {
        console.log($(e.target).closest('.header').length);

        if (!window.matchMedia('(hover: hover)').matches) {
            if (!$(e.target).closest('.header').length) {
                closeMenu();
            }
        }
        e.stopPropagation();
    });

    $menu.on('click', '[data-target="child"]', function(e) {
        const $item = $(this).parent();
        const baseClass = $item[0].dataset.baseClass;

        if (window.matchMedia('(max-width: 1019px)').matches ||
            !window.matchMedia('(hover: hover)').matches) {
            if (baseClass) {
                $item.toggleClass(baseClass + '_open')
                    .siblings()
                    .removeClass(baseClass + '_open');

                if (!baseClassesList.find((i) => i === baseClass)) {
                    baseClassesList.push(baseClass);
                }
            }
        }
        e.preventDefault();
    });

    if (isMobile) {
        window.addEventListener('orientationchange', closeMenu, false);
    } else {
        $(window).resize(closeMenu);
    }
}

export default menu;
