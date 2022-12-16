var $ = jQuery;
var winWidth = $(window).width();



jQuery(window).scroll(function () {
    var winHeight = jQuery(window).height();
    var offset = 0.6;
    var scrollTop = jQuery(window).scrollTop();
    var visibleArea = scrollTop + (winHeight * offset);

    jQuery('.animation-area').each(function () {
        if(jQuery(this).offset().top < visibleArea) {
            jQuery(this).find('.ani-fade').addClass('normal');
            jQuery(this).find('.ani-right').addClass('normal');
            jQuery(this).find('.ani-left').addClass('normal');
        }else{
            jQuery(this).find('.ani-fade').removeClass('normal');
            jQuery(this).find('.ani-right').removeClass('normal');
            jQuery(this).find('.ani-left').removeClass('normal');
        }
    });
});