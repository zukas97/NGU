var blocked = false;
function checkurl(inputstring) {
	switch (true) {
		case inputstring.includes("porn"):
			blocked = true;
			break;
		case inputstring.includes("XXX"):
			blocked = true;
			break;
		case inputstring.includes("xxx"):
			blocked = true;
			break;
		case inputstring.includes("xnxx"):
			blocked = true;
			break;
		case inputstring.includes("XNXX"):
			blocked = true;
			break;
		case inputstring.includes("onlyfans"):
			blocked = true;
			break;
		case inputstring.includes("xhamster"):
			blocked = true;
			break;
		case inputstring.includes("xvideos"):
			blocked = true;
			break;
		case inputstring.includes("damplips"):
			blocked = true;
			break;
		default:
			blocked = false;
			break;

	}
}
var iframe = document.getElementById('customSite');
document.getElementById('setURL').addEventListener('click', function() {
	var url = document.getElementById('urlInput').value;
	

	checkurl(url);
	if (!blocked) {
		iframe.src = url;
	}
	else if (blocked) {
		console.log("page blocked");
		alert("page blocked");
	}

});



document.getElementById('reloadButton').addEventListener('click', function() {
	//iframe.src = iframe.src;
	iframe.contentWindow.location.reload();
	console.log("reloaded");
});
