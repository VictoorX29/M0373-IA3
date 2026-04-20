document.addEventListener('DOMContentLoaded', () => {
	const infoPopup = sessionStorage.getItem('popup');
	const popup = document.querySelector('.sect-welcome-card');
	if (infoPopup === 'true') {
		popup.classList.remove('hidden');
		sessionStorage.setItem('popup', 'false');
		document
			.querySelector('.welcome-card')
			.addEventListener('click', function (e) {
				e.stopPropagation();
			});
		document.addEventListener('click', () => {
			popup.classList.add('hidden');
		});
		document
			.querySelector('.button-welcome-card')
			.addEventListener('click', function (e) {
				e.preventDefault();
				popup.classList.add('hidden');
			});
	} else {
		popup.classList.add('hidden');
	}
});
