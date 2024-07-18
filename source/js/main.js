// https://swiperjs.com/get-started#installation
/*import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';*/
import Swiper from './vendor/swiper-bundle';
import './video';
import './aboniment-tabs';
import './faq-tabs';
import './validate';

new Swiper('.juri__swiper', {
  // configure Swiper to use modules
  navigation: {
    nextEl: '.juri__slider-next',
    prevEl: '.juri__slider-prev',
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
      spaceBetween: 40,
      allowTouchMove: false
    }
  },
  breakpointsBase: 'container'
});

new Swiper('.reviews__swiper', {
  // configure Swiper to use modules
  navigation: {
    disabledClass: 'reviews__slider-disabled',
    nextEl: '.reviews__slider-next',
    prevEl: '.reviews__slider-prev',
  },
  loop: false,
  slidesPerView: 1,
  breakpoints: {
    560: {
      allowTouchMove: false
    }
  },
  breakpointsBase: 'container'
});

