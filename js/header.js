import { supabase } from './supabase.js';
const {
	data: { user },
} = await supabase.auth.getUser();
if (user) {
	document.querySelector('.header-iconos').classList.remove('hidden');
	await fotoUser();
} else {
	document.querySelector('.header-botones').classList.remove('hidden');
}
async function fotoUser() {
	const { data } = await supabase.storage
		.from('myDreamPlace')
		.list('profiles', {
			search: `${user.id}.jpg`,
		});
	if (data) {
		consultaCambiarFoto(data);
	}
	return data;
}
async function consultaCambiarFoto(data) {
	const fotoUsuario = document.querySelector('.header-icono-perfil');
	if (data && data.length > 0) {
		fotoUsuario.src = `https://kwzqtbwcsamesdbmjyvb.supabase.co/storage/v1/object/public/myDreamPlace/profiles/${user.id}.jpg?t=${Date.now()}`;
	}
}
