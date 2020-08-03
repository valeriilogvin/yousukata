//slick-slider settings
$('.sect1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'my-dots',
    infinite: false,
    autoplay: true,
    autoplaySpeed: 4000,
    customPaging: function (slider, i) {
        // var thumb = $(slider.$slides[i]).data();
        return '<a class="custom-dots">' + '0' + (i + 1) + '</a>';
    },
});

// $('.sect1 .my-dots:after').animate({right: 20%, width:100},{duration:500, easing: easeOutExpo});

$(document).ready(function () {

    // appearance & hiding of header-top
    (function($) {
        function sayHi() {
            $('.header-top').css({'display' : 'block'});
        }
        setTimeout(sayHi, 2000);

        $('.header-top .close').click(function () {
            $('.header-top').css({'display' : 'none'});
        });
    })(jQuery);

});

$(function(){
    $('.pushy li.parent-submenu').click(function(){
        $('li.parent-submenu ul.submenu').toggle('slow', function() {
            $(this).toggleClass('expanded');
        });
    });
});
parent-submenu

