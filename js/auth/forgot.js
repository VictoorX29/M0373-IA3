const errorMsg = document.querySelector('.error-msg');
function mostrarError(error) {
	errorMsg.textContent = error;
}
function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function forgot(e) {
	e.preventDefault();
	const email = document.querySelector('#email').value;
	if (!isValidEmail(email)) {
		mostrarError('Introduce un email válido');
		return;
	} else {
		sessionStorage.setItem('emailForgot', email);
		window.location.href = 'inbox.html';
	}
}
document.querySelector('.form-signin').addEventListener('submit', forgot);
