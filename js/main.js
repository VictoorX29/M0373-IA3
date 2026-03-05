var cardsEnjoy = [
	{
		imagen:
			'https://imgs.search.brave.com/nkBczh85pxMDEXPDpmkFCy8VDzFW7Ir-8cbbibDhUVE/rs:fit:860:0:0:0/g:ce/aHR0cDovL2luZ2Vu/aWVyYWRldmlhamVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wOS8yMDIw/MDcyNl8wODUyMTcu/anBn',
		nombre: 'Cataratas del Niágara',
		propiedades: '1789',
	},
	{
		imagen:
			'https://imgs.search.brave.com/wEJolsCkLbwFa4rnPofA4vEZO4Y_TTlJ5EE_yybACB0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYW51ZXZheW9y/ay5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDEvMDEx/MDIwMjkvQ29uc2Vq/b3MtcGFyYS1vcmdh/bml6YXItdW4tdmlh/amUtYS1OdWV2YS1Z/b3JrLVRvcC1vZi10/aGUtUm9jay5qcGc',
		nombre: 'Nueva York',
		propiedades: '1429',
	},
	{
		imagen:
			'https://imgs.search.brave.com/S1qYwo4RrX5ZJhVHrlKFqlgvHFeBKAygrG34MaILoqk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2lyY3Vsb2VjdWVz/dHJlLmVzL2ltYWdl/L2NhY2hlL2NhdGFs/b2cvY29ycmVzcG9u/ZGllbnRlcy9hbWVy/aWNhL2VldXUvbWlh/bWktZmxvcmlkYS9t/aWFtaS1mbG9yaWRh/LTQ1MHgzMTUucG5n',
		nombre: 'Miami',
		propiedades: '724',
	},
	{
		imagen:
			'https://imgs.search.brave.com/dYUFHMQp3BVMuhMdcmQB__MTW4RQAWk8hH9hZ5udZ4c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzMv/ODYzLzE5OS9zbWFs/bC9hZXJpYWwtdmll/dy1vZi10cm9waWNh/bC1pc2xhbmQtd2l0/aC1wYWxtLXRyZWVz/LWF0LW1hbGRpdmVz/LW1hbGRpdmVzLWlz/bGFuZHMtdHJvcGlj/YWwtYWktZ2VuZXJh/dGVkLWZyZWUtcGhv/dG8uanBn',
		nombre: 'Islas Maldivas',
		propiedades: '362',
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
