(function ($) {

    "use strict";

    if (isExists('#rounded-countdown')) {
        const remainingSec = $('.countdown').data('remaining-sec');
        $('.countdown').ClassyCountdown({
            theme: "flat-colors-very-wide",
            end: $.now() + remainingSec
        });
    }

    if (isExists('#normal-countdown')) {
        var date = $('#normal-countdown').data('date');

        $('#normal-countdown').countdown(date, function (event) {
            const $this = $(this).html(event.strftime(''
                + '<div class="time-sec"><h3 class="main-time">%D</h3> <span>Days</span></div>'
                + '<div class="time-sec"><h3 class="main-time">%H</h3> <span>Hours</span></div>'
                + '<div class="time-sec"><h3 class="main-time">%M</h3> <span>Mins</span></div>'
                + '<div class="time-sec"><h3 class="main-time">%S</h3> <span>Sec</span></div>'));
        });
    }


    $('a[href="#"]').on('click', function (event) {
        return 0;
    });

    countdownTime();

})(jQuery);


function countdownTime() {

    if (isExists('#clock')) {
        $('#clock').countdown('2018/01/01', function (event) {
            const $this = $(this).html(event.strftime(''
                + '<div class="time-sec"><span class="title">%D</span> days </div>'
                + '<div class="time-sec"><span class="title">%H</span> hours </div>'
                + '<div class="time-sec"><span class="title">%M</span> minutes </div>'
                + '<div class="time-sec"><span class="title">%S</span> seconds </div>'));
        });
    }
}


function isExists(elem) {
    return $(elem).length > 0;
}