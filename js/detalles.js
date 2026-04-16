import { supabase } from './supabase.js';
const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id'));
async function Detalles() {
	const { data: hotel, error } = await supabase
		.from('hotels')
		.select(
			`
			*,
				hotel_facilities(
				facilities(id, label)
				),
				hotel_explore_area(name, distance)
			`,
		)
		.eq('id', id)
		.single();
	if (error || !hotel) {
		document.querySelector('.divgrid-detalles').innerHTML =
			`<p>No hay imágenes para mostrar porque no se ha seleccionado ningún hotel.</p>`;
		document.querySelector('.divgrid-detalles').innerHTML +=
			`<p>${!error.code === 'PGRST116' ? `Error: ${error.message}` : 'Selecciona un hotel desde resultados.'}</p>`;
		document.querySelector('.h2-divinfoizq').textContent = 'No hotel';
	} else {
		document.querySelector('.divgrid-img-detalles img').src =
			`https://kwzqtbwcsamesdbmjyvb.supabase.co/storage/v1/object/public/myDreamPlace/${hotel.image_url}`;
		document.querySelector('.h2-divinfoizq').textContent = hotel.name;
		document.querySelector('.p-calificacion-result').textContent =
			`${hotel.rating} (${hotel.reviews_count} Reviews)`;
		document.querySelector('#p-direccion').textContent = hotel.address;
		document.querySelector('.p-infohotel-detalles').textContent =
			hotel.overview_text;
		const facilities = document.querySelector('.div-facilities-detalles');
		let htmlF = ``;
		for (const facility of hotel.hotel_facilities) {
			htmlF += `
        <div class="div-facility-detalles">
            <img src="../images/detalles/facilityicons/${facility.facilities.id}.svg" alt="Icono ${facility.facilities.id}">
            <p class="p-facility-detalles">${facility.facilities.label}</p>
        </div>
        `;
		}
		facilities.innerHTML = htmlF;
		const areas = document.querySelector('.div-explore-area-detalles');
		let htmlA = '';
		for (const area of hotel.hotel_explore_area) {
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
}
Detalles();
