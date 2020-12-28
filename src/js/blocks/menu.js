import $ from 'jquery';

function menu(isMobile) {
    const $menu = $('[data-block="menu"]');
    const $body = $('body');
    const $html = $('html');

    $menu.on('click', '[data-target="toggle"]', function(e) {
        $menu.toggleClass('menu_open');

        if (isMobile) {
            $html.toggleClass('overflow-hidden');
        } else {
            $body.toggleClass('overflow-hidden');
        }

        e.preventDefault();
    });

    $('body').on('click', function(e) {
        const $item = $(e.target).parent();

        if ($item.closest('.menu__item').length) {
            $item.toggleClass('menu__item_open');
            $item.siblings().removeClass('menu__item_open');
        } else {
            $('[data-target="child"]').parent().removeClass('menu__item_open');
        }
    });

    function closeMenu() {
        $menu.removeClass('menu_open');
        $menu.find('.menu__item_open').removeClass('menu__item_open');
    }

    if (isMobile) {
        window.addEventListener('orientationchange', closeMenu, false);
    } else {
        $(window).resize(closeMenu);
    }
}

export default menu;
