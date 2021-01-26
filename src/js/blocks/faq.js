import $ from 'jquery';

function faq() {
    const $container = $('[data-faq="container"]');
    $container.on('click', function(e) {
        const faqRightItem = $(e.target).closest('.faq__right-item');
        if ($(e.target).hasClass('faq__link')) {
            return;
        }
        if (faqRightItem) {
            const $answer = faqRightItem.find('[data-click="close"]');
            const $btn = faqRightItem.find('[data-click="btn"]');
            $answer.toggleClass('faq__right-answer_active');
            $btn.toggleClass('faq__open-close_active');
            $btn.parent().toggleClass('faq__open-close-wrap_active');
        }
        return false;
    });
}

export default faq;
