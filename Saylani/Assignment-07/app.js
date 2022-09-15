let count = 1;
let funcStatusRunning = false;
let body = document.body;
let pic;
let btn = document.getElementsByClassName('button-44');

function chgBackground() {
	if (funcStatusRunning === false) {
		let h = screen.height;
		let w = screen.width;
		fetch('https://random.imagecdn.app/' + w + '/' + h).then((x) => {
			body.style.backgroundImage = 'url(' + x.url + ')';
		});
		body.style.backgroundPosition = 'center center';
		body.style.backgroundRepeat = 'no-repeat';
		body.style.backgroundSize = 'cover';
		funcStatusRunning = true;
		btn[0].disabled = true;
		btn[1].disabled = true;
	}
	setTimeout(() => {
		pic = body.style.backgroundImage;
		pic = pic.slice(5, pic.length - 2);
		showData();
		count++;
		funcStatusRunning = false;
		btn[0].disabled = false;
		btn[1].disabled = false;
	}, 5000);
}
chgBackground();

function showData() {
	let data = document.getElementById('img-show');
	let divImg = document.createElement('div');
	divImg.setAttribute('class', 'img');
	divImg.innerHTML = `<div>
							<div class="img-name">Photo - ${count} <span>&#8596;</span></div>
								<button onclick="copyFunc(id)" id="b${count}">Copy</button>
								<button onclick="downFunc(id)" id="d${count}">Download</button>
						</div>
						<div class="img-data">
							<a href="${pic}" target="_blank">
								<img src="${pic}" alt="PHOTO${count}" id="p${count}">
							</a>
						</div>`;
	data.prepend(divImg);
}

function copyFunc(id) {
	let copyLink = document.getElementById('p' + id.slice(1, id.length));
	let copyBtn = document.getElementById(id);
	navigator.clipboard.writeText(copyLink.src);
	copyBtn.innerText = 'Copied';
	setTimeout(() => (copyBtn.innerHTML = 'Copy'), 2000);
}

function downFunc(id) {
	let downLink = document.getElementById('p' + id.slice(1, id.length));
	let downBtn = document.getElementById(id);
	forceDownload(pic, 'Photo-' + pic.slice(34, 60) + '.jpg');
	downBtn.innerText = 'Downloading...';
	setTimeout(() => (downBtn.innerHTML = 'Download'), 2000);
}

function forceDownload(url, fileName) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'blob';
	xhr.onload = function () {
		var urlCreator = window.URL || window.webkitURL;
		var imageUrl = urlCreator.createObjectURL(this.response);
		var tag = document.createElement('a');
		tag.href = imageUrl;
		tag.download = fileName;
		document.body.appendChild(tag);
		tag.click();
		document.body.removeChild(tag);
	};
	xhr.send();
}

function directions(x) {
	let iName = x;
	let cName = x.slice(9);
	let container = document.getElementById('container');
	let changebtn = document.getElementById('changebtn');
	let changebtn2 = document.getElementById('changebtn2');
	let content = document.getElementById('content');
	let menubtn = document.getElementById('menubtn');
	if (cName === 'fa-xmark') {
		content.style.display = 'none';
		changebtn.style.display = 'none';
		changebtn2.style.display = 'flex';
		changebtn2.style.margin = '0';
		menubtn.style.display = 'flex';
		menubtn.style.margin = '5px 0 0 0';
		// container.style.flexDirection = 'row';
	} else if (cName === 'fa-arrow-right') {
		container.style.alignItems = 'flex-end';
	} else if (cName === 'fa-arrow-left') {
		container.style.alignItems = 'flex-start';
	} else if (cName === 'fa-arrow-down') {
		container.style.justifyContent = 'flex-end';
	} else if (cName === 'fa-arrow-up') {
		container.style.justifyContent = 'flex-start';
	} else if (cName === 'fa-arrows-to-dot') {
		container.style.justifyContent = 'center';
		container.style.alignItems = 'center';
	} else if (iName === 'menubtn') {
		content.style.display = 'block';
		changebtn.style.display = 'flex';
		changebtn2.style.display = 'none';
		menubtn.style.display = 'none';
	}
}
