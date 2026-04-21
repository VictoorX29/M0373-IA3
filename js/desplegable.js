import { supabase } from './supabase.js';
const iconoPerfil = document.querySelector('.header-icono-perfil');
const desplegable = document.querySelector('.header-desplegable');

iconoPerfil.addEventListener('click', function (e) {
	e.stopPropagation();
	desplegable.classList.toggle('hidden');
});

document.addEventListener('click', function (e) {
	if (!desplegable.contains(e.target)) {
		desplegable.classList.add('hidden');
	}
});
const buttonSignOut = document.querySelector(
	'.header-desplegable a[href="index.html"]',
);
buttonSignOut.addEventListener('click', async function (e) {
	e.preventDefault();
	const { error } = await supabase.auth.signOut();
	window.location.reload();
});
