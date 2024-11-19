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
		default:
			blocked = false;
			break;

	}
}



document.getElementById('setURL').addEventListener('click', function() {
	var url = document.getElementById('urlInput').value;
	var iframe = document.getElementById('customSite');

	checkurl(url);

	if (blocked) {
		iframe.src = url;

	}

});
