var blocked = false;
function checkurl(inputstring) {
	fetch('inputstring')
	  .then(response => response.text())
	  .then(html => {
	    const parser = new DOMParser();
	    const doc = parser.parseFromString(html, 'text/html');
	    const textContent = doc.body.innerText;

	    const adultKeywords = ['adult', 'porn', 'sex', 'xxx', 'nude'];
	    const containsAdultContent = adultKeywords.some(keyword => textContent.toLowerCase().includes(keyword));

	    console.log('Contains adult content:', containsAdultContent);
		blocked = true;
	  })
	  //.catch(blocked = false);

}

document.getElementById('urlInput').addEventListener('keydown', function(event) {
	const iframe = document.getElementById('customSite');
	const input = document.getElementById('urlInput')
	if (event.key === 'Enter') {
		if (!blocked) {
			iframe.src = url;
		}
		else if (blocked) {
			console.log("page blocked");
			alert("page blocked");
		}
	
	}
});

document.getElementById('setURL').addEventListener('click', function() {
	const iframe = document.getElementById('customSite');
	const input = document.getElementById('urlInput')
	const url = input.value;
	
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
