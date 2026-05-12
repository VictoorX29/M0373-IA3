document.addEventListener('DOMContentLoaded', () => {
	const infoPopup = sessionStorage.getItem('popup');
	const popup = document.querySelector('.sect-welcome-card');
	if (infoPopup === 'true') {
		popup.classList.remove('hidden');
		document.body.style.overflow = 'hidden';
		sessionStorage.setItem('popup', 'false');
		document
			.querySelector('.welcome-card')
			.addEventListener('click', function (e) {
				e.stopPropagation();
			});
		document.addEventListener('click', () => {
			popup.classList.add('hidden');
			window.location.reload();
		});
		document
			.querySelector('.button-welcome-card')
			.addEventListener('click', function (e) {
				e.preventDefault();
				popup.classList.add('hidden');
				window.location.reload();
			});
	}
});
