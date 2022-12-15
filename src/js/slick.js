$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,

  slidesToShow: 3,

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
  appendDots: true,
});

$('.hp-hotel-slider').slick({
  arrows: true,
  slidesToShow: 2,
  variableWidth: true,
  // appendArrows: $('.hp-hotel-slider__arrows'),
  speed: 300,
});

$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 600,
  fade: true,
  autoplay: true,

  cssEase: 'linear',
});

// $('.one-time-slick').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 2,
//   adaptiveHeight: true,
// });
