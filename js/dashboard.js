import { supabase } from './supabase.js';

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
/*
Este mensaje es para decir que el código que está por encima ha sido hecho por IA.
Intenté hacerlo yo, pero a la hora de actualizar la foto no se subía correctamente porque se ve que guardaba
la foto anterior y se había de limpiar la caché o el buffer o algo así me comentó la IA.
Así que simplemente le dije que el código que ya tenía lo actualizara y funcionara correctamente.
*/

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
		botonContraseña.addEventListener('click', () => {});
	}
}
let datosGlobales = {
	nombre: '',
	props: '',
	imagen: '',
};
function añadirOptionCard() {
	const divDatosDash = document.querySelector('.divDatosDash');
	divDatosDash.classList.remove('hidden');
	const selectDatos = document.querySelector('#selectAñadirDatos');
	selectDatos.addEventListener('change', () => {
		document.querySelector('.addDestination').classList.add('hidden');
		document.querySelector('.addInspiration').classList.add('hidden');
		document.querySelector('.addHotel').classList.add('hidden');
		const value = selectDatos.value;
		document.querySelector(`.add${value}`).classList.remove('hidden');
		if (datosGlobales.nombre || datosGlobales.props || datosGlobales.imagen) {
			document.querySelector(`.previewAdd${value}`).classList.remove('hidden');
		}
		if (datosGlobales.nombre) {
			document.querySelector(`#titPreview${value}`).textContent =
				datosGlobales.nombre;
			document.querySelector(`#nombre${value}`).value = datosGlobales.nombre;
		}
		if (value !== 'Inspiration' && datosGlobales.props) {
			document.querySelector(`#numPreview${value}`).textContent =
				datosGlobales.props + ' properties';
			document.querySelector(`#props${value}`).value = datosGlobales.props;
		}
		if (datosGlobales.imagen) {
			document.querySelector(`#imgPreview${value}`).src = datosGlobales.imagen;
		}
	});
	document
		.querySelector('#formAddDestination')
		.addEventListener('input', () => {
			const titulo = document.querySelector('#titPreviewDestination');
			const inputTit = document.querySelector('#nombreDestination');
			const props = document.querySelector('#numPreviewDestination');
			const inputNum = document.querySelector('#propsDestination');
			const imagen = document.querySelector('#imgPreviewDestination');
			const inputImg = document.querySelector('#imagenDestination');
			if (inputTit.value) {
				titulo.textContent = inputTit.value;
				datosGlobales.nombre = inputTit.value;
			}
			if (inputNum.value) {
				props.textContent = inputNum.value + ' properties';
				datosGlobales.props = inputNum.value;
			}
			if (inputImg.files[0]) {
				var foto = URL.createObjectURL(inputImg.files[0]);
				imagen.src = foto;
				datosGlobales.imagen = foto;
			}
			document
				.querySelector('.previewAddDestination')
				.classList.remove('hidden');
			if (inputTit.value && inputNum.value && inputImg.files[0]) {
				if (!document.querySelector('#enviarCardDestination')) {
					document.querySelector('.previewAddDestination').innerHTML +=
						'<button class="buttonEdit" id="enviarCardDestination">Enviar Destination</button>';
					document
						.querySelector('#enviarCardDestination')
						.addEventListener('click', () => {
							const tituloCheck = inputTit.value
								.trim()
								.normalize('NFD')
								.replace(/[\u0300-\u036f]/g, '')
								.replace(/\s+/g, '-')
								.toLowerCase();
							addCardDestination(
								inputTit.value,
								tituloCheck,
								inputImg.files[0],
								inputNum.value,
							);
						});
				}
			}
		});
	document
		.querySelector('#formAddInspiration')
		.addEventListener('input', () => {
			const titulo = document.querySelector('#titPreviewInspiration');
			const inputTit = document.querySelector('#nombreInspiration');
			const cuerpo = document.querySelector('#crpPreviewInspiration');
			const inputCrp = document.querySelector('#cuerpoInspiration');
			const imagen = document.querySelector('#imgPreviewInspiration');
			const inputImg = document.querySelector('#imagenInspiration');
			if (inputTit.value) {
				titulo.textContent = inputTit.value;
				datosGlobales.nombre = inputTit.value;
			}
			if (inputCrp.value) {
				cuerpo.textContent = inputCrp.value;
			}
			if (inputImg.files[0]) {
				const foto = URL.createObjectURL(inputImg.files[0]);
				imagen.src = foto;
				datosGlobales.imagen = foto;
			}
			document
				.querySelector('.previewAddInspiration')
				.classList.remove('hidden');
			if (inputTit.value && inputCrp.value && inputImg.files[0]) {
				if (!document.querySelector('#enviarCardInspiration')) {
					document.querySelector('.previewAddInspiration').innerHTML +=
						'<button class="buttonEdit" id="enviarCardInspiration">Enviar Inspiration</button>';
					document
						.querySelector('#enviarCardInspiration')
						.addEventListener('click', () => {
							const tituloCheck = inputTit.value
								.trim()
								.normalize('NFD')
								.replace(/[\u0300-\u036f]/g, '')
								.replace(/\s+/g, '-')
								.toLowerCase();
							addCardInspiration(
								inputTit.value,
								tituloCheck,
								inputImg.files[0],
								inputCrp.value,
							);
						});
				}
			}
		});
	document.querySelector('#formAddHotel').addEventListener('input', () => {
		const titulo = document.querySelector('#titPreviewHotel');
		const inputTit = document.querySelector('#nombreHotel');
		const props = document.querySelector('#numPreviewHotel');
		const inputNum = document.querySelector('#propsHotel');
		const imagen = document.querySelector('#imgPreviewHotel');
		const inputImg = document.querySelector('#imagenHotel');
		if (inputTit.value) {
			titulo.textContent = inputTit.value;
			datosGlobales.nombre = inputTit.value;
		}
		if (inputNum.value) {
			props.textContent = inputNum.value + ' properties';
			datosGlobales.props = inputNum.value;
		}
		if (inputImg.files[0]) {
			const foto = URL.createObjectURL(inputImg.files[0]);
			imagen.src = foto;
			datosGlobales.imagen = foto;
		}
		document.querySelector('.previewAddHotel').classList.remove('hidden');
		if (inputTit.value && inputNum.value && inputImg.files[0]) {
			if (!document.querySelector('#enviarCardHotel')) {
				document.querySelector('.previewAddHotel').innerHTML +=
					'<button class="buttonEdit" id="enviarCardHotel">Enviar Hotel</button>';
				document
					.querySelector('#enviarCardHotel')
					.addEventListener('click', () => {
						const tituloCheck = inputTit.value
							.trim()
							.normalize('NFD')
							.replace(/[\u0300-\u036f]/g, '')
							.replace(/\s+/g, '-')
							.toLowerCase();
						addCardHotel(
							inputTit.value,
							tituloCheck,
							inputImg.files[0],
							inputNum.value,
						);
					});
			}
		}
	});
}
async function addCardDestination(nombre, nomImage, image_url, propiedades) {
	const { data: destinations, error } = await supabase
		.from('destinations')
		.insert([
			{
				nombre: nombre,
				image_url: `destinations/${nomImage}.webp`,
				propiedades: propiedades,
			},
		])
		.select();
	if (error) {
		console.log(error);
	} else {
		const { data, error } = await supabase.storage
			.from('myDreamPlace')
			.upload(`destinations/${nomImage}.webp`, image_url, {
				upsert: true,
			});
		if (error) {
			console.log(error);
		} else {
			window.location.href = 'index.html#sect-enjoy';
		}
	}
}
async function addCardInspiration(nombre, nomImage, image_url, cuerpo) {
	const { data: destinations, error } = await supabase
		.from('inspirations')
		.insert([
			{
				titulo: nombre,
				image_url: `inspirations/${nomImage}.webp`,
				cuerpo: cuerpo,
			},
		])
		.select();
	if (error) {
		console.log(error);
	} else {
		const { data, error } = await supabase.storage
			.from('myDreamPlace')
			.upload(`inspirations/${nomImage}.webp`, image_url, {
				upsert: true,
			});
		if (error) {
			console.log(error);
		} else {
			window.location.href = 'index.html#sect-nextrip';
		}
	}
}
async function addCardHotel(nombre, nomImage, image_url, propiedades) {
	const { data: destinations, error } = await supabase
		.from('featured_hotels')
		.insert([
			{
				nombre: nombre,
				image_url: `featured/${nomImage}.webp`,
				propiedades: propiedades,
			},
		])
		.select();
	if (error) {
		console.log(error);
	} else {
		const { data, error } = await supabase.storage
			.from('myDreamPlace')
			.upload(`featured/${nomImage}.webp`, image_url, {
				upsert: true,
			});
		if (error) {
			console.log(error);
		} else {
			window.location.href = 'index.html#sect-popular';
		}
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
	if (
		user.email === 'victormn29@gmail.com' ||
		user.email === 'carrebola@fpllefia.com'
	) {
		añadirOptionCard();
	}
});
