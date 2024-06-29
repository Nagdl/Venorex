var swiper = new Swiper(".bannerSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next-button",
    prevEl: ".prev-button",
  },
});

var swiper = new Swiper(".recentSwiper", {  
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
  spaceBetween: 15,
  navigation: {
    nextEl: ".recentNext",
    prevEl: ".recentPrev",
  },
});