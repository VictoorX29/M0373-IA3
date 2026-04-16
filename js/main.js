import { supabase } from './supabase.js';

async function destinations() {
	const divDestinations = document.querySelector('.div-sect-enjoy');
	let { data: destinations, error } = await supabase
		.from('destinations')
		.select('*');
	let htmlDest;
	if (error) {
		htmlDest = `<p>Error: ${error.message}</p>`;
	} else {
		htmlDest = ``;
		for (const dest of destinations) {
			htmlDest += `
			<div>
				<img src="https://kwzqtbwcsamesdbmjyvb.supabase.co/storage/v1/object/public/myDreamPlace/${dest.image_url}" alt="${dest.nombre}" class="img-sect-enjoy">
				<div class="div-text-sect-enjoy">
					<h3 class="h3-div-text-sect-enjoy">${dest.nombre}</h3>
					<p class="p-div-text-sect-enjoy">${dest.propiedades} properties</p>
				</div>
			</div>
			`;
		}
	}
	divDestinations.innerHTML = htmlDest;
}
async function inspirations() {
	const divInspirations = document.querySelector('.div-sect-nextrip');
	let { data: inspirations, error } = await supabase
		.from('inspirations')
		.select('*');
	let htmlInsp;
	if (error) {
		htmlInsp = `<p>Error: ${error.message}</p>`;
	} else {
		htmlInsp = ``;
		for (const insp of inspirations) {
			htmlInsp += `
			<div class="card-div-sect-nextrip">
				<img src="https://kwzqtbwcsamesdbmjyvb.supabase.co/storage/v1/object/public/myDreamPlace/${insp.image_url}" alt="${insp.alt}" class="img-card-div-sect-nextrip">
				<div class="div-text-sect-nextrip">
					<h3 class="h3-div-text-sect-nextrip">${insp.titulo}</h3>
					<p class="p-div-text-sect-nextrip">${insp.cuerpo}.</p>
				</div>	
			</div>
			`;
		}
	}
	divInspirations.innerHTML = htmlInsp;
}

destinations();
inspirations();
