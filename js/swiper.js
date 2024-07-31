const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //   autoplay: {
  //     delay: 5000,
  //   },
});

const swiperTours = new Swiper(".swiper-tours", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 70,

  breakpoints: {
    1720: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
    1075: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // If we need pagination
  //   autoplay: {
  //     delay: 5000,
  //   },
});
