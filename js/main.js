import { cardsEnjoy } from './data.js';
let htmlCardsEnjoy = '';
for (const cardEnjoy of cardsEnjoy) {
	htmlCardsEnjoy += `
	<div>
		<img src="${cardEnjoy.imagen}" alt="${cardEnjoy.nombre}" class="img-sect-enjoy">
		<div class="div-text-sect-enjoy">
			<h3 class="h3-div-text-sect-enjoy">${cardEnjoy.nombre}</h3>
			<p class="p-div-text-sect-enjoy">${cardEnjoy.propiedades} properties</p>
		</div>
	</div>
	`;
}
document.querySelector('.div-sect-enjoy').innerHTML = htmlCardsEnjoy;
import { cardsInspirations } from './data.js';
let htmlCardsIns = '';
for (const cardInspiration of cardsInspirations) {
	htmlCardsIns += `
    <div class="card-div-sect-nextrip">
		<img
			src="${cardInspiration.imagen}"
			alt="${cardInspiration.alt}"
			class="img-card-div-sect-nextrip" />
		<div class="div-text-sect-nextrip">
			<h3 class="h3-div-text-sect-nextrip">${cardInspiration.titulo}</h3>
			<p class="p-div-text-sect-nextrip">${cardInspiration.cuerpo}</p>
		</div>	
	</div>			
    `;
}
document.querySelector('.div-sect-nextrip').innerHTML = htmlCardsIns;
import { cardsHotels } from './data.js';
let htmlCardsHotels = '';
for (const cardHotel of cardsHotels) {
	htmlCardsHotels += `
    <div>
		<img src="${cardHotel.imagen}" alt="${cardHotel.hotel}" class="img-sect-popular">
		<div class="div-text-sect-popular">
			<h3 class="h3-div-text-sect-popular">${cardHotel.hotel}</h3>
			<p class="p-div-text-sect-popular">${cardHotel.propiedades} properties</p>
		</div>
	</div>
    `;
}
document.querySelector('.div-sect-popular').innerHTML = htmlCardsHotels;

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
const iconoPerfil = document.querySelector('.header-icono-perfil');
if (iconoPerfil) {
	const desplegable = document.querySelector('.header-desplegable');
	iconoPerfil.addEventListener('click', function () {
		desplegable.classList.toggle('hidden');
	});
}
var buttonWelcome = document.querySelector('.button-welcome-card');
var sectWelcome = document.querySelector('.sect-welcome-card');
if (buttonWelcome && sectWelcome) {
	sectWelcome.addEventListener('click', ctrlClickWelcome);
	buttonWelcome.addEventListener('click', ctrlClickWelcome);
	function ctrlClickWelcome(e) {
		e.preventDefault();
		sectWelcome.classList.add('hidden');
	}
}
