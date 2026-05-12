const textEmail = document.querySelector('.p-signin span');
const email = sessionStorage.getItem('emailForgot');
if (email) {
	textEmail.textContent = email;
}
sessionStorage.clear();
