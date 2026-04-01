export default function slider() {
document.addEventListener('DOMContentLoaded', function() {

  
  const swiper = new Swiper('.feedback__slider', {
  
    grabCursor: true,
    centeredSlides: false,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

   
    mousewheel: {
      forceToAxis: true,
    },
    
    speed: 400,
     breakpoints: {
    360: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1189: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1615: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  }
  });
  
});
}