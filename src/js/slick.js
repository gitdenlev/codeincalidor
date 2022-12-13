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

$(document).ready(function () {
  $('.restaurant-details-slider').slick({
    arrows: true,
    slidesToShow: 2,
    variableWidth: true,
    appendArrows: $('.restaurant-details__slider-nav'),
    speed: 300,
  });
});

// $(document).ready(function () {
//   $('.slider').slick({
//     arrows: true,
//     adaptiveHeight: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     speed: 300,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnFocus: true,
//     pauseOnHover: true,
//     variableWidth: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 1280,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//     ],
//     mobileFirst: true,
//     appendArrows: $('.hp-restaurant-slider__buttons'),
//   });
// });
