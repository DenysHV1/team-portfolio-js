//? ця функція не приймає ніяких аргументів і вона потрібна для того щоб ніхто не чепав main.js 
//? функція потрібна як обгортка для всієї логіки
//? вся логіка знаходиться всередині
//? ви маєте папку (для своїх JS файлів) в ній, при необхідності, можете створювати інші JS файли (залежно від завдання) і виклик тих функцій повинен бути в основній функції, тобто вы можете написати всередині цієї функції безліч інших функцій, або їх виклики
//? якщо все зрозуміло, то можете видалити ці повідомлення

//your imports is here (if you have)
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
//

export function faq() {
    console.log('hello world from faq');
    const accordionItems = document.querySelectorAll('.accordion-item');
    const firstItem = accordionItems[0];
    if (firstItem) {
      firstItem.classList.add('expanded');
      firstItem.querySelector('.accordion-content').style.maxHeight = firstItem.querySelector('.accordion-content').scrollHeight + 'px';
    }
    accordionItems.forEach(item => {
      const content = item.querySelector('.accordion-content');
      const toggleButton = item.querySelector('.accordion-toggle');
    
      if (!content || !toggleButton) {
        console.error('Не удалось найти один из элементов: content или toggleButton');
        return;
      }
    
      toggleButton.addEventListener('click', () => {
        if (item.classList.contains('expanded')) {
          item.classList.remove('expanded');
          content.style.maxHeight = '0';
        } else {
          accordionItems.forEach(i => {
            i.classList.remove('expanded');
            i.querySelector('.accordion-content').style.maxHeight = '0';
          });
          item.classList.add('expanded');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
    
  }
  