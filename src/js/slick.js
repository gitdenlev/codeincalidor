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

// $('.hp-restaurant-slider').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 2,
//   adaptiveHeight: true,
//   appendArrows: $('.hp-restaurant-slider__buttons'),
//   variableWidth: true,
// });

// $(document).ready(function () {
//   $('.slider').slick();
// });

$(document).ready(function () {
  $('.slider').slick();
});
