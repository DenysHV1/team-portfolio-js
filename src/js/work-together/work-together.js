import { refs } from './form-refs';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { sendData } from './message-api';
import { showModal } from './messageMarkup';
import { localStorageFn } from './localStorage';

export function workTogether() {
  const { form, inputEmail, messageInput, error, modalOverlay } = refs;

  form.addEventListener('submit', oneClickSend);

  async function oneClickSend(event) {
    event.preventDefault();

    const email = event.target.elements.email.value.trim().toLowerCase();
    const message = event.target.elements.message.value.trim();

    // Перевірка на порожні поля
    if (!email || !message) {
      error.textContent = 'Please fill in all fields';
      error.classList.remove('visually-hidden');
      return;
    }

    const formData = {
      email: email,
      comment: message,
    };

    try {
      const response = await sendData(formData);

      if (response) {
        showModal(response.title, response.message, modalOverlay);

        error.textContent = '';
        error.classList.add('visually-hidden');

        form.reset();
        localStorage.removeItem('feedback-form-state');
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: error,
        position: 'topRight',
        timeout: 5000,
        backgroundColor: '#FF4D4D',
        color: '#FFFFFF',
        zindex: 9999,
      });
    }

    const closeButton = document.querySelector('.modal-close-button');
    closeButton.addEventListener('click', () => {
      modalOverlay.classList.add('visually-hidden');
    });
  }

  localStorageFn(inputEmail, messageInput);
}
