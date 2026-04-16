const imgAlternarContraseña = document.querySelector('#imgAlternarContraseña');
const imgAlternarRepetirContraseña = document.querySelector(
	'#imgAlternarRepetirContraseña',
);
if (imgAlternarContraseña) {
	document
		.querySelector('#imgAlternarContraseña')
		.addEventListener('click', function () {
			const inputContraseña = document.querySelector('#inputContraseña');
			if (inputContraseña.type === 'password') {
				inputContraseña.type = 'text';
			} else {
				inputContraseña.type = 'password';
			}
		});
}
if (imgAlternarRepetirContraseña) {
	document
		.querySelector('#imgAlternarRepetirContraseña')
		.addEventListener('click', function () {
			const inputRepetirContraseña = document.querySelector(
				'#inputRepetirContraseña',
			);
			if (inputRepetirContraseña.type === 'password') {
				inputRepetirContraseña.type = 'text';
			} else {
				inputRepetirContraseña.type = 'password';
			}
		});
}
