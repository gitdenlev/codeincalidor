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

$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 600,
  fade: true,
  autoplay: true,

  cssEase: 'linear',
});
