let menuBar = document.querySelector('.fa-solid.fa-bars');
let menuName = document.querySelector('#menu');
let menu = document.querySelectorAll('.menu-section>div:not(:first-child)');
let menuOpen = false;

function menuBtn() {
	if (menuOpen === false) {
		for (let i = 0; i < menu.length; i++) {
			menu[i].style.display = 'flex';
		}
		menuOpen = true;
	} else {
		for (let i = 0; i < menu.length; i++) {
			menu[i].style.display = 'none';
		}
		menuOpen = false;
	}
}

menuName.addEventListener('click', menuBtn);
menuBar.addEventListener('click', menuBtn);
