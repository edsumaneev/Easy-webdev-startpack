$('#slider01').slick({
  infinite: true,
  dots: true,
  prevArrow: $(".slick-prev"),
  nextArrow: $(".slick-next"),
  slidesToShow: 4,
  slidesToScroll: 1,
  // focusOnSelect: true,
  touchThreshold: 100,
  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        dots: false,
      }
    }
  ]
});

$("#slider01").on('afterChange', function (event, slick, currentSlide) {
  $("#cp").text(currentSlide + 1);
});