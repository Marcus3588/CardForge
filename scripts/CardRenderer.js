export function renderCard(){
	const name = document.getElementById('name').value;
	const title = document.getElementById('title').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const company = document.getElementById('company').value;
	const photoInput = document.getElementById('photoUpload');

	const card = document.getElementById('card');
	card.classList.remove('hidden');

	document.getElementById('displayName').textContent = name;
	document.getElementById('displayTitle').textContent = title;
	document.getElementById('displayEmail').textContent = email;
	document.getElementById('displayPhone').textContent = phone;
	document.getElementById('displayCompany').textContent = company;

	if(photoInput.files[0]) {
		const reader = new FileReader();
		reader.onload = (e) => {
			document.getElementById('displayPhoto').src = e.target.result;
		}
		reader.readAsDataURL(photoInput.files[0]);
	}
}
