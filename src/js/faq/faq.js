//? ця функція не приймає ніяких аргументів і вона потрібна для того щоб ніхто не чепав main.js 
//? функція потрібна як обгортка для всієї логіки
//? вся логіка знаходиться всередині
//? ви маєте папку (для своїх JS файлів) в ній, при необхідності, можете створювати інші JS файли (залежно від завдання) і виклик тих функцій повинен бути в основній функції, тобто вы можете написати всередині цієї функції безліч інших функцій, або їх виклики
//? якщо все зрозуміло, то можете видалити ці повідомлення

//your imports is here (if you have)

//

export function faq() {
    console.log('hello world from faq');
    document.querySelectorAll('.accordion-header').forEach(item => {
      item.addEventListener('click', function() {
        const currentlyExpanded = document.querySelector('.accordion-item.expanded');
        if (currentlyExpanded && currentlyExpanded !== this.parentElement) {
          currentlyExpanded.classList.remove('expanded');
          const icon = currentlyExpanded.querySelector('.accordion-icon use');
          icon.setAttribute('href', 'sprite.svg#faq-arrow-bottom'); // Закриваємо стрілкою вниз
        }
    
        this.parentElement.classList.toggle('expanded');
        const currentIcon = this.querySelector('.accordion-icon use');
        if (this.parentElement.classList.contains('expanded')) {
          currentIcon.setAttribute('href', 'sprite.svg#faq-arrow-top'); // Відкриваємо стрілкою вгору
        } else {
          currentIcon.setAttribute('href', 'sprite.svg#faq-arrow-bottom'); // Закриваємо стрілкою вниз
        }
      });
    });
    
  }
  