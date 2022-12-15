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

$('.slider').slick({
  // arrows: true,
  slidesToShow: 2,
  variableWidth: true,
  appendArrows: $('.hp-restaurant-slider__arrows'),
  speed: 300,
});
