const iptWhere = document.querySelector('#input-Where');
const iptCIDate = document.querySelector('#input-CIDate');
const iptCODate = document.querySelector('#input-CODate');
const iptGuests = document.querySelector('#input-Guests');
iptWhere.addEventListener('blur', () => añadirAzul('Where'));
iptCIDate.addEventListener('blur', () => añadirAzul('CIDate'));
iptCODate.addEventListener('blur', () => añadirAzul('CODate'));
iptGuests.addEventListener('blur', () => añadirAzul('Guests'));
function añadirAzul(cambio) {
	const icon = document.querySelector(`#icon${cambio}`);
	const input = document.querySelector(`#input-${cambio}`);
	if (input.value.trim() !== '') {
		icon.classList.add('iconoAzul');
	} else {
		icon.classList.remove('iconoAzul');
	}
}
