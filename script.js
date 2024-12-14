const game = document.getElementById("game");
const navbar = document.getElementById('nav-placeholder');
const fsbttn = document.getElementById("fscreen")
const url = game.src;
fsbttn.addEventListener('click', function() {
	document.documentElement.requestFullscreen()
	navbar.style.display = "none";
	game.style.height = '100vh';
	game.style.width = '100vw';
	//game.src = url;
	//iframe.contentWindow.location.reload();
	if (game.src == "https://windowslover1234.github.io/games/slope/"){
		game.src = url;
	}
});

document.addEventListener("fullscreenchange", adjustElementSize);

function adjustElementSize() {
	if (document.fullscreenElement) {
		navbar.style.display = "none";
		document.body.overflow = 'hidden';
		if (game.src === "https://windowslover1234.github.io/games/slope/"){
			game.src = url;
		}
	}
	else {
		navbar.style.display = "block";
		game.style.height = '95vh';
		game.style.width = '96vw';
		document.body.overflow = 'scroll';
		//game.src = url;
		if (game.src == "https://windowslover1234.github.io/games/slope/"){
			game.src = url;
		}
	}
}
