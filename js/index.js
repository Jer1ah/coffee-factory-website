// adding slick slider
const slickSliderController = (function() {
    $('.testimonials__list').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 3500
    });
}());