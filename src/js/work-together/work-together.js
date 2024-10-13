//? ця функція не приймає ніяких аргументів і вона потрібна для того щоб ніхто не чепав main.js
//? функція потрібна як обгортка для всієї логіки
//? вся логіка знаходиться всередині
//? ви маєте папку (для своїх JS файлів) в ній, при необхідності, можете створювати інші JS файли (залежно від завдання) і виклик тих функцій повинен бути в основній функції, тобто вы можете написати всередині цієї функції безліч інших функцій, або їх виклики
//? якщо все зрозуміло, то можете видалити ці повідомлення

//your imports is here (if you have)

//
import { setupEmailValidation } from '../work-together/validation';

export function workTogether() {
  console.log('hello world from workTogether');

  // Змінений селектор для форми
  const form = document.querySelector('.form-list');
  const inputEmail = document.querySelector('#emailInput');
  const messageInput = document.querySelector('#messageInput'); // Переконайтеся, що textarea має id
  const done = document.querySelector('.text');
  const emailError = document.querySelector('.error');
  const emptyError = document.querySelector('.empty-error');

  // Елементи для модального вікна
  const modal = document.querySelector('.together-modal');
  const modalOverlay = document.querySelector('.modal-overlay');

  // Обробка події при відправці форми
  form.addEventListener('submit', oneClickSend);

  function oneClickSend(event) {
    event.preventDefault();

    const email = inputEmail.value.trim().toLowerCase();
    const message = messageInput.value.trim();

    // Перевірка на заборонені символи в email
    const forbiddenChars = [
      '!',
      '£',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
      '_',
      '-',
      '+',
      '=',
      '#',
      '~',
      '/',
      '?',
      '{',
      '}',
      '[',
      ']',
      '`',
      '¬',
      '|',
      '"',
      ',',
      '<',
      '>',
      ':',
      ';',
    ];

    for (let char of forbiddenChars) {
      if (email.includes(char)) {
        emailError.textContent = `Invalid character in email: ${char}`;
        emailError.classList.remove('visually-hidden');
        return;
      }
    }

    // emailError.classList.add('visually-hidden');

    // Перевірка на порожні поля
    if (!email || !message) {
      done.textContent = '';
      emptyError.textContent = 'Please fill in all fields';
      emptyError.classList.remove('visually-hidden');
      return;
    }

    emptyError.classList.add('visually-hidden'); // Приховуємо повідомлення про помилку

    // Формування даних для запиту
    const formData = {
      email: email,
      message: message,
    };

    // Відправка даних на сервер
    fetch('https://portfolio-js.b.goit.study/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to send data to the server.');
        }
        return response.json();
      })
      .then(data => {
        console.log('Response from server:', data);
        openModal(); // Відкриваємо модальне вікно при успіху
        form.reset(); // Очищуємо форму після успішної відправки
        localStorage.removeItem('feedback-form-state'); // Очищуємо локальне сховище
      })
      .catch(error => {
        console.error('Error:', error);
        done.textContent = 'Failed to send the message. Please try again.';
      });
  }

  // Функція для відкриття модального вікна
  function openModal() {
    modal.classList.remove('visually-hidden');
    modalOverlay.classList.remove('visually-hidden');
  }

  // Закриття модального вікна при кліку на оверлей
  modalOverlay.addEventListener('click', closeModal);

  function closeModal() {
    modal.classList.add('visually-hidden');
    modalOverlay.classList.add('visually-hidden');
  }

  // Зберігання даних у локальному сховищі
  local();

  function local() {
    const storedData = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ) || {
      email: '',
      message: '',
    };

    inputEmail.value = storedData.email;
    messageInput.value = storedData.message;

    inputEmail.addEventListener('input', () => {
      saveData('email', inputEmail.value);
    });

    messageInput.addEventListener('input', () => {
      saveData('message', messageInput.value);
    });

    function saveData(field, value) {
      const currentData =
        JSON.parse(localStorage.getItem('feedback-form-state')) || {};
      currentData[field] = value;
      localStorage.setItem('feedback-form-state', JSON.stringify(currentData));
    }
  }
}
