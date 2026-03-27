export default function slider() {
document.addEventListener('DOMContentLoaded', function() {

  
  const swiper = new Swiper('.feedback__slider', {
    
    slidesPerView: 'auto',
    spaceBetween: 20,
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
  });
});
}