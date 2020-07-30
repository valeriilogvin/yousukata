$('.sect1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    dotsClass: 'my-dots',
    infinite: false,
    autoplay: true,
    autoplaySpeed: 4000,
    customPaging : function(slider, i) {
        // var thumb = $(slider.$slides[i]).data();
        return '<a class="custom-dots">'+'0'+(i+1)+'</a>';
    },
});