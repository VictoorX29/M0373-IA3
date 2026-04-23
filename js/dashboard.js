import { supabase } from './supabase.js';
const {
	data: { user },
} = await supabase.auth.getUser();
async function consultaFotoUsuario() {
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
	const fotoUsuario = document.querySelector('.fotoPerfilDash');
	if (data && data.length > 0) {
		fotoUsuario.src = `https://kwzqtbwcsamesdbmjyvb.supabase.co/storage/v1/object/public/myDreamPlace/profiles/${user.id}.jpg?t=${Date.now()}`;
	}
}
async function consultaSubirFoto(archivo) {
	const { data, error } = await supabase.storage
		.from('myDreamPlace')
		.upload(`profiles/${user.id}.jpg`, archivo, {
			upsert: true,
		});
	if (error) {
		console.log(error.message);
	} else {
		const fotoUsuario = document.querySelector('.fotoPerfilDash');
		fotoUsuario.src = `https://kwzqtbwcsamesdbmjyvb.supabase.co/storage/v1/object/public/myDreamPlace/profiles/${user.id}.jpg?t=${Date.now()}`;
		window.location.reload();
	}
}
const botonFoto = document.querySelector('#buttonEditFoto');
const divInput = document.querySelector('.divFotoInput');
botonFoto.addEventListener('click', () => previewFoto());
function previewFoto() {
	divInput.classList.remove('hidden');
	const inputFoto = document.querySelector('#archivo');
	inputFoto.addEventListener('change', () => {
		if (inputFoto.files[0]) {
			const divPreview = document.querySelector('.divPreviewFotoInput');
			divPreview.classList.remove('hidden');
			const imgPreview = document.querySelector('#imgPreviewFoto');
			imgPreview.src = URL.createObjectURL(inputFoto.files[0]);
			botonFoto.classList.remove('hidden');
			botonFoto.textContent = 'Confirmar';
			botonFoto.removeEventListener('click', previewFoto);
			botonFoto.addEventListener('click', async () => {
				await consultaSubirFoto(inputFoto.files[0]);
			});
		}
	});
}

document.addEventListener('DOMContentLoaded', consultaFotoUsuario());
