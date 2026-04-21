const errorMsg = document.querySelector('.error-msg');
function mostrarError(error) {
	errorMsg.textContent = error;
}
function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
document
	.querySelector('.form-button-register')
	.addEventListener('click', function (e) {
		e.preventDefault();
		const email = document.querySelector('#email').value;
		if (!email) {
			mostrarError('Introduce tu email');
			return;
		} else {
			if (!isValidEmail(email)) {
				mostrarError('Introduce un email válido');
				return;
			} else {
				mostrarError();
			}
		}
		sessionStorage.setItem('email', email);
		window.location.href = 'create.html';
	});
