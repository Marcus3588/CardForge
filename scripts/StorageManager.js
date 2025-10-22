export function saveData() {
	const cardData = {
		name : document.getElementById('displayName').textContent,
		title : document.getElementById('displayTitle').textContent,
		email : document.getElementById('displayEmail').textContent,
		phone : document.getElementById('displayPhone').textContent,
		company : document.getElementById('displayCompany').textContent,
		photo : document.getElementById('displayPhoto').src
	}
	localStorage.setItem('businessCard', JSON.stringify(cardData));
	alert('card saved')
}

export function loadData() {
	const saved = localStorage.getItem('businessCard');
	if(!saved) return;
	const data = JSON.parse(saved);

	 document.getElementById('displayName').textContent = data.name;
	 document.getElementById('displayTitle').textContent = data.title;
	 document.getElementById('displayEmail').textContent = data.email;
	 document.getElementById('displayPhone').textContent = data.email;
	 document.getElementById('displayCompany').textContent = data.company;
	 document.getElementById('displayPhoto').src = data.photo;
	 document.getElementById('card').classList.remove('hidden');
}