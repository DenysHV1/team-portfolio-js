//? ця функція не приймає ніяких аргументів і вона потрібна для того щоб ніхто не чепав main.js 
//? функція потрібна як обгортка для всієї логіки
//? вся логіка знаходиться всередині
//? ви маєте папку (для своїх JS файлів) в ній, при необхідності, можете створювати інші JS файли (залежно від завдання) і виклик тих функцій повинен бути в основній функції, тобто вы можете написати всередині цієї функції безліч інших функцій, або їх виклики
//? якщо все зрозуміло, то можете видалити ці повідомлення

//your imports is here (if you have)

//

export function faq() {
    console.log('hello world from faq');
  
    document.addEventListener('DOMContentLoaded', () => {
        const faqList = document.getElementById('faq-list');
        const faqItems = faqList.querySelectorAll('li');
      
        // Функція для закриття всіх елементів
        function closeAllFaqs() {
          faqItems.forEach(item => {
            const answer = item.querySelector('.faq-answer');
            const toggleButton = item.querySelector('.faq-toggle');
            const question = item.querySelector('.faq-question');
      
            // Закриваємо всі елементи
            answer.classList.remove('show');
            toggleButton.classList.remove('active');
            question.classList.remove('active');  // Відновлюємо початковий фон
          });
        }
      
        // Додаємо обробники подій для кожного питання
        faqItems.forEach((item, index) => {
          const toggleButton = item.querySelector('.faq-toggle');
          const answer = item.querySelector('.faq-answer');
          const question = item.querySelector('.faq-question');
      
          toggleButton.addEventListener('click', () => {
            // Перевіряємо, чи вже розгорнутий цей елемент
            const isActive = answer.classList.contains('show');
      
            if (isActive) {
              // Якщо елемент вже відкритий — закриваємо його
              answer.classList.remove('show');
              toggleButton.classList.remove('active');
              question.classList.remove('active');  // Відновлюємо початковий фон
            } else {
              // Якщо елемент закритий — відкриваємо його
              answer.classList.add('show');
              toggleButton.classList.add('active');
              question.classList.add('active');  // Змінюємо фон активного питання
      
              // Закриваємо всі інші елементи
              closeAllFaqsExcept(item);
            }
          });
      
          // Відкриваємо перший елемент за замовчуванням
          if (index === 0) {
            answer.classList.add('show');
            toggleButton.classList.add('active');
            question.classList.add('active');  // Фон для першого елементу
          }
        });
      
        // Функція для закриття всіх FAQ, крім поточного
        function closeAllFaqsExcept(currentItem) {
          faqItems.forEach(item => {
            if (item !== currentItem) {
              const answer = item.querySelector('.faq-answer');
              const toggleButton = item.querySelector('.faq-toggle');
              const question = item.querySelector('.faq-question');
      
              // Закриваємо всі інші елементи
              answer.classList.remove('show');
              toggleButton.classList.remove('active');
              question.classList.remove('active');
            }
          });
        }
      });
      
  }
  