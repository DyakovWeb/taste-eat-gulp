import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperTestimonial() {
   const swiper = new Swiper('#swiper-testimonial', {
      slidesPerView: "auto",
      grabCursor: true,
      spaceBetween: 30,
      pagination: {
         el: '.swiper-pagination',
       },
   });
}
   
export default swiperTestimonial;