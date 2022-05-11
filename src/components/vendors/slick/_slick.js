$('.slider').slick({
  infinite: true,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  touchThreshold: 100,
  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});