// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import './video';

window.addEventListener('load', () => {
  const tabs = document.querySelector('.price__tabs');
  tabs.addEventListener('click', (e) => {
    const oldTab = document.querySelector('.price__tab--active');
    oldTab.classList.remove('price__tab--active');
    e.target.classList.add('price__tab--active');
    const tabNumber = e.target.dataset.open;
    const oldActiveContent = document.querySelector('.price__tab-content--active');
    oldActiveContent.classList.remove('price__tab-content--active');
    const newActiveContent = document.querySelector(`[data-tab="${tabNumber}"]`);
    newActiveContent.classList.add('price__tab-content--active');
  });
});
