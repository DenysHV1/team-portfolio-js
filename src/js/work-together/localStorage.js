export function localStorageFn(inputEmail, messageInput) {
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
	  localStorage.setItem(
		'feedback-form-state',
		JSON.stringify(currentData)
	  );
	}
  }