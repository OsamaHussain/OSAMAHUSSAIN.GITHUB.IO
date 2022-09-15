let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let hex;

function genHex() {
	let rnd = Math.floor(Math.random() * 16);
	return rnd;
}

function chgBackground() {
	hex = '#';
	let body = document.body;
	for (let i = 0; i < 6; i++) {
		hex += hexCode[genHex()];
	}
	body.style.backgroundColor = hex;
	showHex();
}

function showHex() {
	let show = document.getElementById('hex-show');
	let cre = document.createElement('p');
	let creT = document.createTextNode(`HexCode Gen...: ${hex}`);
	cre.appendChild(creT);
	show.prepend(cre);
}
