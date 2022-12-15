$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
});

$('.variable-width').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  appendDots: true,
});

$('.hp-hotel-slider').slick({
  arrows: true,
  slidesToShow: 2,
  variableWidth: true,
  // appendArrows: $('.hp-hotel-slider__arrows'),
  speed: 300,
});
