window.onload = function() {
	const path = window.location.pathname;
	const file = path.substring(path.lastIndexOf('/') + 1);

	const HomeButton = document.getElementById('HomeButton');

	if (file === 'index.html') {
		HomeButton.style.display = 'block'
	};
};
