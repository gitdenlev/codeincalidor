$('.one-time').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
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

$('.hp-restaurant-slider').slick({
  arrows: true,
  slidesToShow: 2,
  variableWidth: true,
  appendArrows: $('.restaurant-details__slider-nav'),
  speed: 300,
});
