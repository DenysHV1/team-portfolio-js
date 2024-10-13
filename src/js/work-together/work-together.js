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
  // your code is here ⏬'
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  // Викликаємо валідацію для форми
  setupEmailValidation('.form-list', '.form-validation-text', emailPattern);
}
