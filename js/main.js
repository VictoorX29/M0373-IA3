var cardsEnjoy = [
	{
		imagen:
			'https://imgs.search.brave.com/nkBczh85pxMDEXPDpmkFCy8VDzFW7Ir-8cbbibDhUVE/rs:fit:860:0:0:0/g:ce/aHR0cDovL2luZ2Vu/aWVyYWRldmlhamVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wOS8yMDIw/MDcyNl8wODUyMTcu/anBn',
		nombre: 'Cataratas del Niágara',
		propiedades: 1.789,
	},
	{
		imagen:
			'https://imgs.search.brave.com/wEJolsCkLbwFa4rnPofA4vEZO4Y_TTlJ5EE_yybACB0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYW51ZXZheW9y/ay5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDEvMDEx/MDIwMjkvQ29uc2Vq/b3MtcGFyYS1vcmdh/bml6YXItdW4tdmlh/amUtYS1OdWV2YS1Z/b3JrLVRvcC1vZi10/aGUtUm9jay5qcGc',
		nombre: 'Nueva York',
		propiedades: 1.429,
	},
	{
		imagen:
			'https://imgs.search.brave.com/S1qYwo4RrX5ZJhVHrlKFqlgvHFeBKAygrG34MaILoqk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2lyY3Vsb2VjdWVz/dHJlLmVzL2ltYWdl/L2NhY2hlL2NhdGFs/b2cvY29ycmVzcG9u/ZGllbnRlcy9hbWVy/aWNhL2VldXUvbWlh/bWktZmxvcmlkYS9t/aWFtaS1mbG9yaWRh/LTQ1MHgzMTUucG5n',
		nombre: 'Miami',
		propiedades: 724,
	},
	{
		imagen:
			'https://imgs.search.brave.com/dYUFHMQp3BVMuhMdcmQB__MTW4RQAWk8hH9hZ5udZ4c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzMv/ODYzLzE5OS9zbWFs/bC9hZXJpYWwtdmll/dy1vZi10cm9waWNh/bC1pc2xhbmQtd2l0/aC1wYWxtLXRyZWVz/LWF0LW1hbGRpdmVz/LW1hbGRpdmVzLWlz/bGFuZHMtdHJvcGlj/YWwtYWktZ2VuZXJh/dGVkLWZyZWUtcGhv/dG8uanBn',
		nombre: 'Islas Maldivas',
		propiedades: 362,
	},
];
let divSectEnjoy = document.querySelector('.div-sect-enjoy');
let htmlCardsEnjoy = ``;
for (let i = 0; i < cardsEnjoy.length; i++) {
	const n = cardsEnjoy[i];
	htmlCardsEnjoy += `
    <div>
		<img src="${n.imagen}" alt="${n.nombre}" class="img-sect-enjoy">
		<div class="div-text-sect-enjoy">
			<h3 class="h3-div-text-sect-enjoy">${n.nombre}</h3>
			<p class="p-div-text-sect-enjoy">${n.propiedades} properties</p>
		</div>
	</div>
    `;
}
divSectEnjoy.innerHTML = htmlCardsEnjoy;
var cardsInspirations = [
	{
		imagen:
			'https://www.thireasuites.com/blog/user/pages/01.home/05.santorini-blue-domes/santorini-blue-domes01.jpg',
		titulo: 'Santorini’s most romantic cliffside hotels',
		cuerpo:
			'Discover the beauty of Santorini, famous for its white villages, blue domes, and unforgettable sunsets overlooking the Aegean Sea.',
		alt: 'Santorini Escapes',
	},
	{
		imagen:
			'https://images.squarespace-cdn.com/content/v1/53eb4da9e4b0ef9279a1ba95/1607287117463-KHUNUPMMW3XELWLPPQAE/005_switzerland_mountains_lake_travel_photo_by_chymomore.jpg',
		titulo: 'Top alpine destinations for winter lovers',
		cuerpo:
			'Explore breathtaking alpine landscapes, cozy mountain lodges, and world-class ski resorts perfect for winter adventures.',
		alt: 'Alpine Adventures',
	},
	{
		imagen:
			'https://images-pw.pixieset.com/page/deQW9a/DJI_0262-1_clean-9169e8be-1500.jpg',
		titulo: 'Paradise islands for ultimate relaxation',
		cuerpo:
			'Escape to crystal-clear waters, white-sand beaches, and peaceful island resorts designed for pure relaxation.',
		alt: 'Tropical Island Retreats',
	},
];
const divSectIns = document.querySelector('.div-sect-nextrip');
let htmlCardsIns = ``;
for (let i = 0; i < cardsInspirations.length; i++) {
	const n = cardsInspirations[i];
	htmlCardsIns += `
    <div class="card-div-sect-nextrip">
		<img
			src="${n.imagen}"
			alt="${n.alt}"
			class="img-card-div-sect-nextrip" />
		<div class="div-text-sect-nextrip">
			<h3 class="h3-div-text-sect-nextrip">${n.titulo}</h3>
			<p class="p-div-text-sect-nextrip">${n.cuerpo}</p>
		</div>	
	</div>			
    `;
}
divSectIns.innerHTML = htmlCardsIns;
var cardsHotels = [
	{
		imagen:
			'https://us.images.westend61.de/0002015268j/aerial-view-of-luxury-resort-island-with-turquoise-waters-and-reef-vashafaru-maldives-AAEF37097.jpg',
		hotel: 'Azure Bay Resort',
		propiedades: 1.945,
	},
	{
		imagen:
			'https://assets.anantara.com/image/upload/q_auto%2Cf_auto/media/minor/anantara/images/qasr-al-sarab-desert-resort-by-anantara/leisure/infinity-pool/infinity-pool-2025/984x532_infinity_pool_qasr.jpg',
		hotel: 'Golden Palm Retreat',
		propiedades: 1.32,
	},
	{
		imagen:
			'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/24/67/a5/glass-igloos-at-the-dusk.jpg?h=500&s=1&w=900',
		hotel: 'Northern Lights Lodge',
		propiedades: 865,
	},
	{
		imagen:
			'https://cf.bstatic.com/xdata/images/hotel/max1024x768/820635917.jpg?k=6d7c8d4b4227dd9ae56a966b82f9d05491513dedc2403366b8691e61b8d5cb38&o=',
		hotel: 'Riviera Grand Hotel',
		propiedades: 742,
	},
];
const divSectHotels = document.querySelector('.div-sect-popular');
let htmlCardsHotels = ``;
for (let i = 0; i < cardsHotels.length; i++) {
	const n = cardsHotels[i];
	htmlCardsHotels += `
    <div>
		<img src="${n.imagen}" alt="${n.hotel}" class="img-sect-popular">
		<div class="div-text-sect-popular">
			<h3 class="h3-div-text-sect-popular">${n.hotel}</h3>
			<p class="p-div-text-sect-popular">${n.propiedades} properties</p>
		</div>
	</div>
    `;
}
divSectHotels.innerHTML = htmlCardsHotels;
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
// iptWhere.addEventListener('blur', function (e) {
// 	e.preventDefault();
// 	const iconWhere = document.querySelector('#iconWhere');
// 	if (iptWhere.value.trim() !== '') {
// 		iconWhere.classList.add('iconoAzul');
// 	} else {
// 		iconWhere.classList.remove('iconoAzul');
// 	}
// });

// iptCIDate.addEventListener('blur', function (e) {
// 	e.preventDefault();
// 	const iconCIDate = document.querySelector('#iconCIDate');
// 	if (iptCIDate.value.trim() !== '') {
// 		iconCIDate.classList.add('iconoAzul');
// 	} else {
// 		iconCIDate.classList.remove('iconoAzul');
// 	}
// });

// iptCODate.addEventListener('blur', function (e) {
// 	e.preventDefault();
// 	const iconCODate = document.querySelector('#iconCODate');
// 	if (iptCODate.value.trim() !== '') {
// 		iconCODate.classList.add('iconoAzul');
// 	} else {
// 		iconCODate.classList.remove('iconoAzul');
// 	}
// });

// iptGuests.addEventListener('blur', function (e) {
// 	e.preventDefault;
// 	const iconGuests = document.querySelector('#iconGuests');
// 	if (iptGuests.value.trim() !== '') {
// 		iconGuests.classList.add('iconoAzul');
// 	} else {
// 		iconGuests.classList.remove('iconoAzul');
// 	}
// });
const iconoPerfil = document.querySelector('.header-icono-perfil');
iconoPerfil.addEventListener('click', function () {
	const desplegable = document.querySelector('#header-desplegable');
	desplegable.classList.toggle('hidden');
	// if (desplegable.classList.contains('hidden')) {
	// 	desplegable.classList.remove('hidden');
	// } else {
	// 	desplegable.classList.add('hidden');
	// }
});
