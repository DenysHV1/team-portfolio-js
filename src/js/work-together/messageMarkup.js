import sprite from '../../img/sprite.svg';

export function showModal(title, message, modal) {
  modal.innerHTML = '';
  modal.classList.remove('visually-hidden');

  modal.addEventListener('click', event => {
    if (event.target === event.currentTarget) {
      modal.classList.add('visually-hidden');
    }
  });

  return modal.insertAdjacentHTML(
    'beforeend',
    `<div class="together-modal">
		<button type="button" class="modal-close-button">
			<svg width="24" height="24" class="close-modal-svg">
				<use href="${sprite}#close-modal"></use>
			</svg>
		</button>
	  <h2 class="together-modal-title">
		${title}
	  </h2>
	  <p class="together-modal-text">
		${message}
	  </p>
	</div>`
  );
}
