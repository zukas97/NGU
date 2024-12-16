const game = document.getElementById("game");
const navbar = document.getElementById('nav-placeholder');
const fsbttn = document.getElementById("fscreen")
const url = game.src;
fsbttn.addEventListener('click', function() {
	document.documentElement.requestFullscreen()
	navbar.style.display = "none";
	game.style.height = '100vh';
	game.style.width = '100vw';
	if (game.src == "https://windowslover1234.github.io/games/slope/"){
		game.src = url;
	}
});

document.addEventListener("fullscreenchange", adjustElementSize);

function adjustElementSize() {
	if (document.fullscreenElement) {
		navbar.style.display = "none";
		game.style.border = '0';
		game.style.borderRadius = '0';
		fsbttn.style.display = 'none'
		document.body.overflow = 'hidden';
		if (game.src === "https://windowslover1234.github.io/games/slope/"){
			game.src = url;
		}
	}
	else {
		navbar.style.display = "block";
		fsbttn.style.display = "block";
		game.style.height = '99vh';
		game.style.width = '96vw';
		game.style.border = '1px';
		game.style.borderRadius = '8px';
		document.body.overflow = 'scroll';
		if (game.src == "https://windowslover1234.github.io/games/slope/"){
			game.src = url;
		}
	}
}
