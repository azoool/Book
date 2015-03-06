window.addEventListener("hashchange", function() {
	var req = new XMLHttpRequest();
	var num = window.location.hash.substring(1);
	if (num === ""){
		num = 1;
	}
	req.open("GET", "json/chapitre" + num + ".json", true);
	req.onreadystatechange = function() {
		if (req.readyState === 4) {
			afficherChapitre(req.responseText);
		}
	};
	req.send();
});

function livre() {
	var req = new XMLHttpRequest();
	req.open("GET", "json/chapitre1.json", true);
	req.onreadystatechange = function() {
		if (req.readyState === 4) {
			afficherChapitre(req.responseText);
		}
	};
	req.send();
}

var chapitre;
var i;

function afficherChapitre(json) {
	chapitre = JSON.parse(json);
	document.getElementById("textChapitre").innerHTML = chapitre.txt;
	document.getElementById("lienChapitre").innerHTML = "";
	for (i = 0; i < chapitre.links.length; i++) {
		document.getElementById("lienChapitre").innerHTML = document.getElementById("lienChapitre").innerHTML + "<button type='button' class='btn btn-primary btn-lg btn-block'><a href='" + chapitre.links[i].link + "'>" + chapitre.links[i].txt + "</a></button><br>";
	}
}