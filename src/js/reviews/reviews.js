import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel} from 'swiper/modules';
import 'swiper/swiper-bundle.css'; 

import getReview from './api-reviews';
import createMarkup from './render-reviews';

const reviewsList = document.querySelector(".list-reviews");
const buttonLeft = document.querySelector(".swiper-button-prev");
const buttonRight = document.querySelector(".swiper-button-next");

let swiper;

document.addEventListener("DOMContentLoaded", function() {
  swiper = new Swiper('.swiper', {
   modules:[Navigation, Keyboard, Mousewheel],
    navigation: {
      nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
     disabledClass: "disabled",
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
    speed: 200,
    centeredSlides: true,
  });
});


export async function reviews() {
  console.log('Loading reviews...');

  try {
    const response = await getReview();
    console.log(response);

    if (response) {
      reviewsList.innerHTML = createMarkup(response);
      swiper.update(); 
      
    } else {
      reviewsList.innerHTML = '<p>Not found</p>';
    }
  } catch (error) {
    console.error(error);
    reviewsList.innerHTML = '<p>Not found</p>';
  }
}

