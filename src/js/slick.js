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

$('.slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true,
  arrows: true,
});

// $(document).ready(function () {
//   $('.slider').slick({
//     arrows: false,
//     dots: true,
//   });
// });
