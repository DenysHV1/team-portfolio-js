import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getReview from './api-reviews';
import createMarkup from './render-reviews';

const reviewsList = document.querySelector('.list-reviews');

let swiper;

document.addEventListener('DOMContentLoaded', () => {
  swiper = new Swiper('.swiper', {
    modules: [Navigation, Keyboard, Mousewheel],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'disabled',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      enabled: true,
      sensitivity: 2,
    },
    speed: 350,

    breakpoints: {
      1280: {
        slidesPerView: 'auto',
        spaceBetween: 32,
      },
    },
  });
});

document.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    event.preventDefault();

    const activeIndex = swiper.activeIndex;
    const isShiftPressed = event.shiftKey;

    if (isShiftPressed) {
      swiper.slideTo(
        activeIndex > 0 ? activeIndex - 1 : swiper.slides.length - 1
      );
    } else {
      swiper.slideTo(
        activeIndex < swiper.slides.length - 1 ? activeIndex + 1 : 0
      );
    }
  }
});

export async function reviews() {
  try {
    const response = await getReview();

    if (response) {
      reviewsList.innerHTML = createMarkup(response);

      swiper.update();
    } else {
      iziToast.error({
        title: 'Error',
        message: 'No reviews found',
        position: 'topRight',
        timeout: 5000,
        backgroundColor: '#FF4D4D',
        color: '#FFFFFF',
        zindex: 9999,
      });

      reviewsList.innerHTML = '<p class="notFound">Not found</p>';
    }
  } catch (error) {
    console.error(error);

    iziToast.error({
      title: 'Error',
      message: 'No reviews found',
      position: 'topRight',
      timeout: 5000,
      backgroundColor: '#FF4D4D',
      color: '#FFFFFF',
      zindex: 9999,
    });

    reviewsList.innerHTML = '<p class="notFound">Not found</p>';
  }
}
