const iptWhere = document.querySelector('#input-where');
const iptCIDate = document.querySelector('#input-CIDate');
const iptCODate = document.querySelector('#input-CODate');
const iptGuests = document.querySelector('#input-guests');
iptWhere.addEventListener('blur', () => añadirAzul('where'));
iptCIDate.addEventListener('blur', () => añadirAzul('CIDate'));
iptCODate.addEventListener('blur', () => añadirAzul('CODate'));
iptGuests.addEventListener('blur', () => añadirAzul('guests'));
function añadirAzul(cambio) {
	let icon = document.querySelector(`#icon-input-${cambio}`);
	let input = document.querySelector(`#input-${cambio}`);
	if (input.value.trim()) {
		if (cambio === 'where') {
			icon.src = '../images/icons/icon-location-blue.svg';
		} else if (cambio === 'guests') {
			icon.src = '../images/icons/icon-user-blue.svg';
		} else {
			icon.src = '../images/icons/icon-calendar-blue.svg';
		}
	} else {
		if (cambio === 'where') {
			icon.src = '../images/icons/icon-location.svg';
		} else if (cambio === 'guests') {
			icon.src = '../images/icons/icon-user.svg';
		} else {
			icon.src = '../images/icons/icon-calendar.svg';
		}
	}
}
