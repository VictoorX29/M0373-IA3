import { hotels } from './data.js';
const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id'));
const hotel = hotels.find((h) => h.id === id);
if (!hotel) {
	document.querySelector('.divgrid-detalles').innerHTML =
		`<p>No hay imágenes para mostrar porque no se ha seleccionado ningún hotel.</p>`;
	document.querySelector('.h2-divinfoizq').textContent = 'No hotel';
} else {
	console.log(hotel);
	document.querySelector('.divgrid-img-detalles img').src = hotel.image;
	document.querySelector('.h2-divinfoizq').textContent = hotel.name;
	document.querySelector('#p-direccion').textContent = hotel.address;
	document.querySelector('.p-calificacion-result').textContent =
		`${hotel.rating} (${hotel.reviewsCount} Reviews)`;
	document.querySelector('.p-infohotel-detalles').textContent =
		hotel.overviewText;
	const facilities = document.querySelector('.div-facilities-detalles');
	let htmlF = ``;
	for (const facility of hotel.topFacilities) {
		htmlF += `
        <div class="div-facility-detalles">
            <img src="../images/detalles/facilityicons/${facility.id}.svg" alt="Icono ${facility.id}">
            <p class="p-facility-detalles">${facility.label}</p>
        </div>
        `;
	}
	facilities.innerHTML = htmlF;
	const areas = document.querySelector('.div-explore-area-detalles');
	let htmlA = '';
	for (const area of hotel.exploreArea) {
		htmlA += `
        <div class="div-explore-detalles">
            <img
                src="../images/detalles/icono-ubicacion.svg"
                alt="Icono Avión" />
            <div class="div-p-explore-detalles">
                <p class="p-explore-detalles">${area.name}</p>
                <p class="p-explore-detalles">${area.distance}</p>
            </div>
        </div>
        `;
	}
	areas.innerHTML = htmlA;
}
