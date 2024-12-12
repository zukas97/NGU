var blocked = false;
function checkurl(inputstring) {
	fetch('https://example.com')
	  .then(response => response.text())
	  .then(html => {
	    const parser = new DOMParser();
	    const doc = parser.parseFromString(html, 'text/html');
	    const textContent = doc.body.innerText;

	    const adultKeywords = ['adult', 'porn', 'sex', 'xxx', 'nude'];
	    const containsAdultContent = adultKeywords.some(keyword => textContent.toLowerCase().includes(keyword));

	    console.log('Contains adult content:', containsAdultContent);
	  })
	  .catch(blocked = true);

}
document.getElementById('setURL').addEventListener('click', function() {
	var iframe = document.getElementById('customSite');
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
	var iframe = document.getElementById('customSite');
	iframe.src = iframe.src;
	console.log("reloaded");
});
