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
      spaceBetween: 40
    }
  },
  breakpointsBase: 'container'
});

new Swiper('.reviews__swiper', {
  // configure Swiper to use modules
  navigation: {
    nextEl: '.reviews__slider-next',
    prevEl: '.reviews__slider-prev',
  },
  loop: false,
  slidesPerView: 1
});

const form = document.querySelector('.form__send-form');
form.addEventListener('submit', (e) => {
  const inputName = document.querySelector('.form__input--name');
  const name = inputName.value;
  if(/[^A-Za-zа-яА-Я ]/g.test(name)) {
    inputName.classList.add('form__input--invalid');
  } else {
    inputName.classList.remove('form__input--invalid');
  }

  const inputPhone = document.querySelector('.form__input--phone');
  const phone = inputPhone.value;
  if(/[a-zA-Zа-яА-Я]/g.test(phone)) {
    inputPhone.classList.add('form__input--invalid');
  } else {
    inputPhone.classList.remove('form__input--invalid');
  }

  if(inputName.classList.contains('form__input--invalid') || inputPhone.classList.contains('form__input--invalid')) {
    e.preventDefault();
    return false;
  }
});
