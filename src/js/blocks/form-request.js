import $ from 'jquery';
import Inputmask from 'inputmask';

function formRequest(isMobile) {
    const $popup = $('[data-block="popup"]');
    const $body = $('body');
    const $html = $('html');
    const classPopupOpen = 'popup_open';
    const $formRequest = $popup.find('[data-form="request"]');
    const $sendBlock = $popup.find('[data-block="formSend"]');
    const $formRequestBlock = $formRequest.parent();
    const classError = 'form__field_error';
    const classHideForm = 'popup__form_hide';
    const classSendForm = 'popup__send_active';
    const im = new Inputmask('+7(999) 999-99-99');

    im.mask(document.querySelector('[name="phone"]'));

    $body.on('click', '[data-target="formRequest"]', function(e) {
        $popup.addClass(classPopupOpen);

        if (isMobile) {
            $html.addClass('overflow-hidden');
        } else {
            $body.addClass('overflow-hidden');
        }

        e.preventDefault();
    });

    $('[data-target="close"]').on('click', function(e) {
        $popup.removeClass(classPopupOpen);
        $sendBlock.removeClass(classSendForm);
        $formRequestBlock.removeClass(classHideForm);

        if (isMobile) {
            $html.removeClass('overflow-hidden');
        } else {
            $body.removeClass('overflow-hidden');
        }

        e.preventDefault();
    });

    $formRequest.on('submit', function(e) {
        const $form = $(this);
        const $fieldRequired = $form.find('[data-required]');
        const pattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
        let isError = false;

        $fieldRequired.each(function() {
            const $field = $(this);
            const value = $field.val().trim();
            const $error = $field.siblings('[data-error]');

            if (!value) {
                isError = true;
                $error.text('Заполните поле');
                $error[0].hidden = false;
            } else if ($field.is('[name="email"]') && !pattern.test(value)) {
                isError = true;
                $error.text('Вы ввели неверный Email');
                $error[0].hidden = false;
            }
        });

        if (!isError) {
            $sendBlock.addClass(classSendForm);
            $formRequestBlock.addClass(classHideForm);
            window.dataLayer.push({
                category: 'corp-solutions_request',
                ' label': 'corp-solutions_form',
                action: 'form_submitiion'
            });
        }

        e.preventDefault();
    });

    $formRequest.on('focus', 'input', function(e) {
        const $field = $(this);
        const $error = $field.siblings('[data-error]');

        $field.removeClass(classError);
        $error.empty();
        $error[0].hidden = true;

        e.preventDefault();
    });
}

export default formRequest;
