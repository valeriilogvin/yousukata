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
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.sect8-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button type="button" class="my-slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="my-slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
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

$('.sect8').on('click', '.js-show', function () {
    $('.js-show-text').toggleClass('visible');
    var hBlock = $(this).siblings('.visible');
    $(this).text(hBlock.is(':visible') ? 'Hide text' : 'Show full text');
});
