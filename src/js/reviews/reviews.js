import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; 

import getReview from './api-reviews';
import createMarkup from './render-reviews';

const reviewsList = document.querySelector(".list-reviews");
const buttonLeft = document.querySelector(".swiper-button-prev");
const buttonRight = document.querySelector(".swiper-button-next");

// Initialize Swiper
const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: buttonRight,
    prevEl: buttonLeft,
  },
  slidesPerView: 1, // Настройте по мере необходимости
  spaceBetween: 20,  // Настройте расстояние между слайдами
//   on: {
//     init: () => {
//       checkButtonsState(); // Проверяем состояние кнопок при инициализации
//     },
//     slideChange: () => {
//       checkButtonsState(); // Проверяем состояние кнопок при смене слайда
//     },
//   }, // Закрывающая скобка для объекта "on"
});



export async function reviews() {
  console.log('Loading reviews...');

  // Optionally, show a loading state here (e.g., loading spinner)
  reviewsList.innerHTML = '<p>Loading...</p>'; // Temporary loading message

  // Disable left button if on the first page
 

  try {
    const response = await getReview();
    console.log(response);

    if (response) {
      reviewsList.innerHTML = createMarkup(response);
      swiper.update(); // Update Swiper after rendering
      checkButtonsState(); // Check button states after updates
    } else {
      reviewsList.innerHTML = '<p>Not found</p>';
    }
  } catch (error) {
    console.error(error);
    reviewsList.innerHTML = '<p>Not found</p>';
  }
}

function checkButtonsState() {
  if (swiper.isBeginning) {
    buttonLeft.classList.add("disabled");
  } else {
    buttonLeft.classList.remove("disabled");
  }

  if (swiper.isEnd) {
    buttonRight.classList.add("disabled");
  } else {
    buttonRight.classList.remove("disabled");
  }
} 