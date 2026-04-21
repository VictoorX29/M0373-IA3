import { supabase } from '../supabase.js';
const errorMsg = document.querySelector('.error-msg');
function mostrarError(error) {
	errorMsg.textContent = error;
}
async function signIn(e) {
	e.preventDefault();
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#inputContraseña').value;
	if (!email || !password) {
		mostrarError('Rellena todos los campos');
		return;
	}
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});
	if (error) {
		mostrarError(error.message);
		return;
	}
	sessionStorage.setItem('popup', 'true');
	window.location.href = '../index.html';
}
document.querySelector('.form-signin').addEventListener('submit', signIn);
