export function downloadCard(){
	const card = document.getElementById('card');
	html2canvas(card).then(canvas => {
		const link = document.createElement('a');
		link.download = 'business_card.png';
		link.href = canvas.toDataURL();
		link.click();
	})
}