/* ====================================
   Onload functions
   ==================================== */

$(function() {
    /*show mobile menu*/
    $('.fa-navicon').click(function() {
        $(this).toggleClass('is-active');
        $(".mobile__menu").slideToggle('fast');
    });
    $('.breaking ul').bxSlider({
        mode: 'vertical',
        pager:0,
        nextText: '',
        prevText: '',
        nextSelector: '.breaking_next',
        prevSelector: '.breaking_prev',
        adaptiveHeight: 1,
        auto: 1,
        pause: '5000'
    });
});