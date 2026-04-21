import { supabase } from './supabase.js';
const {
	data: { user },
} = await supabase.auth.getUser();
if (user) {
	document.querySelector('.header-iconos').classList.remove('hidden');
	const usuario = await fotoUser();
	const fotoUsuario = document.querySelector('.header-icono-perfil');
	if (usuario.avatar_url) {
		fotoUsuario.src = usuario.avatar_url;
	}
} else {
	document.querySelector('.header-botones').classList.remove('hidden');
}
async function fotoUser() {
	const { data, error } = await supabase
		.from('profiles')
		.select('*')
		.eq('id', user.id)
		.single();
	return data;
}
