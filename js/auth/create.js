import { supabase } from '../supabase.js';
const email = sessionStorage.getItem('email');
const errorMsg = document.querySelector('.error-msg');
function mostrarError(error) {
	errorMsg.textContent = error;
}
function isValidPassword(password) {
	return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}/.test(password);
}
async function register(e) {
	e.preventDefault();
	const password = document.querySelector('#inputContraseña').value;
	const repeatPassword = document.querySelector(
		'#inputRepetirContraseña',
	).value;
	if (!isValidPassword(password)) {
		mostrarError('La contraseña tiene que ser compleja');
		return;
	} else {
		if (password !== repeatPassword) {
			mostrarError('Las contraseñas tienen que coincidir');
			return;
		} else {
			mostrarError();
			const { data, error } = await supabase.auth.signUp({
				email,
				password,
			});
			console.log(data);
			if (error) {
				mostrarError(error.message);
				return;
			}
			sessionStorage.setItem('popup', true);
			window.location.href = '../index.html';
		}
	}
}
document.querySelector('.form-signin').addEventListener('submit', register);
