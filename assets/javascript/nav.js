function ready(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

function setUpNavToggle() {
	document.getElementById('nav-toggle').addEventListener('click', function() {
		if(
getComputedStyle(document.getElementById('main-navigation')).getPropertyValue('display') == 'none') {
document.getElementById('main-navigation').style.display = 'block';
} else {
document.getElementById('main-navigation').style.display = 'none';
}
	});
}

ready(setUpNavToggle);
