import { supabase } from './supabase.js';
/*
La parte de la consulta y subida de foto de Usuario está hecha con IA porque intenté hacerlo yo,
pero a la hora de actualizar la foto no se subía correctamente porque se ve que guardaba
la foto anterior y se había de limpiar la caché o el buffer o algo así me comentó la IA.
Así que simplemente le dije que el código que ya tenía lo actualizara y funcionara correctamente.
*/

async function consultaFotoUsuario(user) {
	const { data } = await supabase.storage
		.from('myDreamPlace')
		.list('profiles', {
			search: `${user.id}.jpg`,
		});
	if (data) {
		consultaCambiarFoto(data, user);
	}
	return data;
}
async function consultaCambiarFoto(data, user) {
	const fotoUsuario = document.querySelector('.fotoPerfilDash');
	if (data && data.length > 0) {
		fotoUsuario.src = `https://kwzqtbwcsamesdbmjyvb.supabase.co/storage/v1/object/public/myDreamPlace/profiles/${user.id}.jpg?t=${Date.now()}`;
	}
}
async function consultaSubirFoto(archivo, user) {
	console.log(user);
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
function consultaBoton(user) {
	if (user) {
		botonFoto.classList.remove('hidden');
		botonFoto.addEventListener('click', async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			previewFoto(user);
		});
	}
}

function previewFoto(user) {
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
				await consultaSubirFoto(inputFoto.files[0], user);
			});
		}
	});
}
async function consultaUsername(user) {
	let { data: profiles, error } = await supabase
		.from('profiles')
		.select('username')
		.eq('id', user.id)
		.single();
	const username = document.querySelector('#pUsername');
	const divUsername = document.querySelector('#divUsername');
	const buttonEdit = document.querySelector('#buttonEditUsername');
	if (profiles) {
		if (!profiles.username) {
			username.textContent = 'Configura tu nombre de usuario';
		} else {
			username.textContent = profiles.username;
		}
		buttonEdit.classList.remove('hidden');
		buttonEdit.addEventListener('click', () => {
			if (buttonEdit.textContent.trim() === 'Editar') {
				divUsername.innerHTML = `<input type="text" class="inputEditUser" id="inputUsername" ${profiles.username ? `value=${profiles.username}` : ''} />`;
				buttonEdit.textContent = 'Confirmar';
				divUsername.innerHTML +=
					'<button id="buttonCancelUsername" class="buttonEdit">Cancelar</button>';
				document
					.querySelector('#buttonCancelUsername')
					.addEventListener('click', () => {
						window.location.reload();
					});
			} else {
				const inputUsername = document.querySelector('input#inputUsername');
				actualizarUsername(user, inputUsername.value.trim());
			}
		});
	} else {
		username.textContent = 'No has iniciado sesión';
	}
}
async function actualizarUsername(user, username) {
	const { data, error } = await supabase
		.from('profiles')
		.update({ username })
		.eq('id', user.id)
		.select();
	if (error) {
		console.log(error.message);
	}
	window.location.reload();
}
async function consultaNameUser(user) {
	let { data: profiles, error } = await supabase
		.from('profiles')
		.select('fullName')
		.eq('id', user.id)
		.single();
	const nameUser = document.querySelector('#pNameUser');
	const divNameUser = document.querySelector('#divNameUser');
	const buttonEdit = document.querySelector('#buttonEditNameUser');
	if (profiles) {
		if (!profiles.fullName) {
			nameUser.textContent = 'Configura tu nombre';
		} else {
			nameUser.textContent = profiles.fullName;
		}
		buttonEdit.classList.remove('hidden');
		buttonEdit.addEventListener('click', () => {
			if (buttonEdit.textContent.trim() === 'Editar') {
				divNameUser.innerHTML = `<input type="text" class="inputEditUser" id="inputNameUser" ${profiles.fullName ? `value="${profiles.fullName}"` : ''} />`;
				buttonEdit.textContent = 'Confirmar';
				divNameUser.innerHTML +=
					'<button id="buttonCancelNameUser" class="buttonEdit">Cancelar</button>';
				document
					.querySelector('#buttonCancelNameUser')
					.addEventListener('click', () => {
						window.location.reload();
					});
			} else {
				const inputNameUser = document.querySelector('input#inputNameUser');
				actualizarNameUser(user, inputNameUser.value.trim());
			}
		});
	} else {
		nameUser.textContent = 'No has iniciado sesión';
	}
}
async function actualizarNameUser(user, fullName) {
	const { data, error } = await supabase
		.from('profiles')
		.update({ fullName })
		.eq('id', user.id)
		.select();
	if (error) {
		console.log(error.message);
	}
	window.location.reload();
}
function consultaEmail(user) {
	const pEmail = document.querySelector('#pEmailUser');
	if (user) {
		pEmail.textContent = user.email;
	}
}
async function contraseña(user) {
	if (user) {
		const botonContraseña = document.querySelector('#buttonEditPSWD');
		botonContraseña.classList.remove('hidden');
		botonContraseña.addEventListener('click', () => {
			console.log('Hola');
		});
	}
}
document.addEventListener('DOMContentLoaded', async () => {
	const {
		data: { user },
	} = await supabase.auth.getUser();
	(consultaBoton(user),
		consultaFotoUsuario(user),
		consultaUsername(user),
		consultaNameUser(user),
		consultaEmail(user),
		contraseña(user));
});
