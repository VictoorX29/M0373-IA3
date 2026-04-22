import { supabase } from './supabase.js';
const {
	data: { user },
} = await supabase.auth.getUser();
if (user) {
	const usuario = await fotoUser();
	const fotoUsuario = document.querySelector('.fotoPerfilDash');
	if (usuario.avatar_url) {
		fotoUsuario.src = usuario.avatar_url;
	}
}
async function fotoUser() {
	const { data, error } = await supabase
		.from('profiles')
		.select('*')
		.eq('id', user.id)
		.single();
	return data;
}
