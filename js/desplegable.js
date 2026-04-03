const iconoPerfil = document.querySelector('.header-icono-perfil');
const desplegable = document.querySelector('.header-desplegable');
iconoPerfil.addEventListener('click', function () {
	desplegable.classList.toggle('hidden');
});
