$(document).ready(function () {
    //slick-slider settings
    $('.sect1-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'my-dots',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        pauseOnHover:false,
        customPaging: function (slider, i) {
            // var thumb = $(slider.$slides[i]).data();
            return '<a class="custom-dots">' + '0' + (i + 1) + '</a>';
        },
    });
    $('.sect4-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // variableWidth: true,
        dots: false,
        prevArrow: '<button type="button" class="my-slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="my-slick-next"><i class="fas fa-chevron-right"></i></button>',
        // infinite: true,
        // fade: true,
        // cssEase: 'linear',
        // pauseOnHover:false,
    });
    $('.sect6-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button type="button" class="my-slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="my-slick-next"><i class="fas fa-chevron-right"></i></button>',
        // infinite: true,
        // fade: true,
        // cssEase: 'linear',
        // pauseOnHover:false,
    });
    $('.sect8-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button type="button" class="my-slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="my-slick-next"><i class="fas fa-chevron-right"></i></button>',
        // infinite: true,
        // fade: true,
        // cssEase: 'linear',
        // pauseOnHover:false,
    });
});

// $('.sect1-slick .my-dots:after').animate({right: 20%, width:100},{duration:500, easing: easeOutExpo});

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

    // burger-menu appearance & hiding submenu
    $(function(){
        $('.pushy li.parent-submenu').click(function(){
            $('li.parent-submenu ul.submenu').toggle('slow', function() {
                $(this).toggleClass('expanded');
            });
        });
    });
});



