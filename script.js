document.getElementById('setURL').addEventListener('click', function() {
	var url = document.getElementById('urlInput').value;
	var iframe = document.getElementById('customSite');
	iframe.src = url;
});
