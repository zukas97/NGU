const game = document.getElementById("game");
const navbar = document.getElementById('nav-placeholder');
	const url = game.src;
document.getElementById("fscreen").addEventListener('click', function() {
	document.documentElement.requestFullscreen()
	navbar.style.display = "none";
	game.style.height = '100vh';
	game.style.width = '100vw';
	game.style.zindex = 5;
	game.src = url;
	iframe.contentWindow.location.reload();
});

if (Document.fullscreen) {
	navbar.style.display = "none";
	game.src = url;
}
else {
	navbar.style.display = "block";
	game.src = url;
}
