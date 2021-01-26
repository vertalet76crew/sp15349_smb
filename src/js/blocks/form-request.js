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
    const $registrationInput = $('.form__field');
    const im = new Inputmask('+7(999) 999-99-99', {
        placeholder: 'X'
    });

    const telMask = document.querySelectorAll('[name="phone"]')[0];

    function focusHandler(selector) {
        im.mask(selector);
    }

    function blurHandler(selector) {
        if (selector) {
            selector.inputmask.remove();
        }
    }

    telMask.addEventListener('focus', function() {
        focusHandler(telMask);
    });
    telMask.addEventListener('blur', function() {
        blurHandler(telMask);
    });

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
        const $errors = $('[data-errors]');

        $fieldRequired.each(function(i, el) {
            const $field = $(this);
            const value = $field.val().trim();
            const $error = $($errors.children('[data-error]')[i]);

            if (!value) {
                isError = true;
                $error.text(`Укажите ${el.dataset.name}`);
                $error[0].hidden = false;
                $(el).addClass(classError);
            } else if ($field.is('[name="email"]') && !pattern.test(value)) {
                isError = true;
                $error.text('Укажите корректный адрес почты');
                $error[0].hidden = false;
                $(el).addClass(classError);
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
    const $fieldRequired = $('[data-required]');
    const $errors = $('[data-errors]');

    function hideErrorHandler(e, i, el) {
        const $error = $($errors.children('[data-error]')[i]);
        $(el).removeClass(classError);
        $error.empty();
        $error[0].hidden = true;
        e.preventDefault();
    }

    $fieldRequired.each(function(i, el) {
        $(el).on('focus', (e) => {
            hideErrorHandler(e, i, el);
        });
    });

    $registrationInput.each(function(index, element) {
        $(element).on('focus', function() {
            const plholder = $(element).siblings('.form__placeholder');
            plholder.addClass('form__placeholder_active');
        });
        $(element).on('blur', function() {
            const plholder = $(element).siblings('.form__placeholder');

            if ($(element).val() === '') {
                plholder.removeClass('form__placeholder_active');
            }
        });
    });
}

export default formRequest;
