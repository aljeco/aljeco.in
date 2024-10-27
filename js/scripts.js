(function ($) {
    "use strict";

    if (window.location.href.indexOf('subscribed') !== -1) {
        $('#alert-subscribed').prop('hidden', false);
    }

    const remainingSec = $('.countdown').data('remaining-sec');
    $('.countdown').ClassyCountdown({
        theme: "flat-colors-very-wide",
        end: $.now() + remainingSec
    });

    $('a[href="#"]').on('click', function (event) {
        return 0;
    });

})(jQuery);
