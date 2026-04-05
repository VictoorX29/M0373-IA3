import { hotels } from '../js/data.js';
const divResults = document.querySelector('.div-cards-results');
function renderizarResultados() {
	let html = ``;
	for (const hotel of hotels) {
		html += `
        <div class="div-card-result">
            <div class="izq-div-card-result">
                <a href="detalles.html?id=${hotel.id}" class="nostyle a-card-result">
                    <img
                        src="${hotel.image}"
                        alt=""
                        class="img-card-result" />
                </a>
            </div>
            <div class="der-div-card-result">
                <div class="div-h3tit-porce-result">
                    <h3 class="h3-tit-card-result">${hotel.name}</h3>
                    ${hotel.badge ? `<p class="${hotel.badge.type}">${hotel.badge.text}</p>` : ''}
                </div>
                <div class="div-imgestr-pcalif-result">
                    <img
                        src="../images/icons/grupo-icono-estrellas.svg"
                        alt="Estrellas"
                        class="img-estrellas-result" />
                    <p class="p-calificacion-result">4.5 (1200 Reviews)</p>
                </div>
                <div class="divgeneral-availa-precio">
                    <div class="div-p-availa-result">
                        <p class="p-live-result">
                            ${hotel.description}
                        </p>
                        <p class="p-reats-result">
                            ${hotel.details}
                        </p>
                        <a href="detalles.html?id=${hotel.id}" class="a-availa-result nostyle"
                            >See availability</a
                        >
                    </div>
                    <div class="div-p-precio-result">
                        ${hotel.discount ? `<p class="p-percoff-result">${hotel.discount}% off</p>` : ''}
                        <p class="p-roomdays-result">1 room 2 days</p>
                        <div class="div-precio-result">
                            ${hotel.oldPrice ? `<p class="p-prectach-result">$${hotel.oldPrice}</p>` : ''}  
                            <p class="p-precfinal-result">$${hotel.finalPrice}</p>
                        </div>
                        <p class="p-taxes-result">Includes taxes and fees</p>
                    </div>
                </div>
            </div>
        </div>
        `;
	}
	divResults.innerHTML = html;
}
renderizarResultados();
