$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true,
});

$('.variable-width').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
});

$('.hp-hotel-slider').slick({
  arrows: true,
  slidesToShow: 2,
  variableWidth: true,
  appendArrows: $('.restaurant-details__slider-nav'),
  speed: 300,
});
