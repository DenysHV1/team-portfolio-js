export function setupEmailValidation(
  formSelector,
  validationTextSelector,
  emailPattern
) {
  const form = document.querySelector(formSelector);
  const validationText = document.querySelector(validationTextSelector);
  const emailInput = form.querySelector('input[type="email"]');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Зупинити стандартну поведінку форми

    if (!emailPattern.test(emailInput.value)) {
      validationText.classList.remove('visually-hidden'); // Показати текст помилки
      emailInput.classList.add('input-error'); // Застосувати червоний колір тексту
    } else {
      validationText.classList.add('visually-hidden'); // Сховати текст помилки
      emailInput.classList.remove('input-error'); // Повернути звичайний колір
      console.log('Form submitted successfully'); // Лог для перевірки
    }
  });
}
