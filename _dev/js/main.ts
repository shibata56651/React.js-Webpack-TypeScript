import './init';
import {swiper} from './modules/swiper';
import {fade} from './modules/fade';
import {SmoothScroll} from './modules/SmoothScroll';
import {tab} from './modules/tab';
import {moreShow} from './modules/moreShow';
import {headertoggle} from './modules/headertoggle';
import {toggle} from './modules/toggle';
import {modal} from './modules/modal';
import {jsonGetData} from './modules/jsonGetData';
import {xmlGetData} from './modules/xmlGetData';
import '@babel/polyfill';
import 'scroll-behavior-polyfill';

((win, doc) => {
  const swiperTopRoot = doc.querySelector<HTMLElement>('.js-swiper-recommend');

  if (swiperTopRoot) {
    new swiper(swiperTopRoot, {
      timer: false,
      swiperOptions: {
        loop: true,
        loopFillGroupWithBlank: true,
        slidesPerView: 3,
        spaceBetween: 45,
        slidesPerGroup: 3,
        speed: 1000,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 3,
          },
          1024: {
            spaceBetween: 45,
          },
        },
        pagination: {
          el: '.js-carousel-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        a11y: {
          prevSlideMessage: '\u524D\u3078', // 前へ
          nextSlideMessage: '\u6B21\u3078', // 次へ
        },
      },
    });
  }

  const swiperTopAboutRoot = doc.querySelector<HTMLElement>('.js-swiper-about');

  if (swiperTopAboutRoot) {
    new swiper(swiperTopAboutRoot, {
      timer: false,
      swiperOptions: {
        loop: true,
        loopFillGroupWithBlank: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        slidesPerGroup: 1,
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.js-carousel-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        a11y: {
          prevSlideMessage: '\u524D\u3078', // 前へ
          nextSlideMessage: '\u6B21\u3078', // 次へ
        },
      },
    });
  }

  // アンカーリンク
  const anchorLinks = doc.querySelectorAll<HTMLElement>('a[href^="#anc-"], a[href="#top"]');
  const urlHash = doc.location.hash;

  if (anchorLinks.length) {
    anchorLinks.forEach((item) => {
      new SmoothScroll(item, urlHash);
    });
  }

  // PCheaderトグル
  const headerToggleRoots = doc.querySelectorAll<HTMLAnchorElement>('.js-header-menu-items');

  if (headerToggleRoots.length) {
    headerToggleRoots.forEach((item) => {
      new headertoggle(item, headerToggleRoots);
    });
  }

  const modalRoots = doc.querySelectorAll<HTMLElement>('.js-modal-hook');

  if (modalRoots.length) {
    modalRoots.forEach((items) => {
      new modal(items);
    });
  }

  const tabRoots = doc.querySelectorAll<HTMLAnchorElement>('.js-tab-hook');

  if (tabRoots.length) {
    tabRoots.forEach((item) => {
      new tab(item, tabRoots);
    });
  }

  const moreShowRoots = doc.querySelectorAll<HTMLElement>('.js-show-btn');

  if (moreShowRoots.length) {
    moreShowRoots.forEach((item) => {
      new moreShow(item);
    });
  }

  const fadeRoots = doc.querySelectorAll<HTMLElement>('.js-fade-roots');

  if (fadeRoots.length) {
    fadeRoots.forEach((item) => {
      new fade(item);
    });
  }

  const toggleRoots = doc.querySelectorAll<HTMLAnchorElement>('.js-toggle-roots');

  if (toggleRoots.length) {
    toggleRoots.forEach((item) => {
      const {toggleJudge} = item.dataset;
      new toggle(item, toggleRoots, toggleJudge);
    });
  }

  const jsonRoots = doc.getElementById('json-area');

  if (jsonRoots) {
    new jsonGetData(jsonRoots);
  }

  const xmlRoots = doc.getElementById('xml-area');

  if (xmlRoots) {
    new xmlGetData(xmlRoots);
  }
})(window, document);
