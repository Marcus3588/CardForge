export function initTheme() {
	const themeSwitch = document.getElementById('themeSwitch');

	if(localStorage.getItem('theme') === 'dark') {
		document.body.classList.add('dark-mode');
		themeSwitch.checked = true;
	}
	themeSwitch.addEventListener('change', () => {
		document.body.classList.toggle('dark-mode');
		localStorage.setItem('theme',themeSwitch.checked ? 'dark' : 'light')
	})
}
