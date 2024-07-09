// https://swiperjs.com/get-started#installation
/*import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';*/
import Swiper from './vendor/swiper-bundle';
import './video';
import './aboniment-tabs';
import './faq-tabs';

new Swiper('.juri__swiper', {
  // configure Swiper to use modules
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    560: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 640px
    1160: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  breakpointsBase: 'container'
});

