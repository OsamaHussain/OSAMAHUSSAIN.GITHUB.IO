// Variables
let timer = document.querySelector('.timer');
let playPauseBtn = document.querySelector('.playPauseBtn');
let resetBtn = document.querySelector('.resetBtn');
let runBtn = playPauseBtn.children[0].classList;
let miliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let leadingMiliSeconds = 0;
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;
let timerStatus = 'stopped';
let timerInterval = null;

// Functions and Event Listners
function stopWatch() {
	miliSeconds += 10;
	if (miliSeconds == 1000) {
		miliSeconds = 0;
		seconds++;
		if (seconds === 60) {
			seconds = 0;
			minutes++;
			if (minutes === 60) {
				minutes = 0;
				hours++;
			}
		}
	}
	// leadingMiliSeconds = miliSeconds < 10 ? '0000' + miliSeconds : miliSeconds;
	// leadingMiliSeconds = miliSeconds < 100 ? '000' + miliSeconds : miliSeconds;
	leadingMiliSeconds =
		miliSeconds < 1
			? '0000'
			: miliSeconds < 100
			? '00' + miliSeconds
			: miliSeconds < 1000
			? '0' + miliSeconds
			: miliSeconds;
	leadingSeconds = seconds < 10 ? '0' + seconds.toString() : seconds;
	leadingMinutes = minutes < 10 ? '0' + minutes.toString() : minutes;
	leadingHours = hours < 10 ? '0' + hours.toString() : hours;
	timer.innerHTML =
		leadingHours +
		':' +
		leadingMinutes +
		':' +
		leadingSeconds +
		'<span class="mili">.' +
		leadingMiliSeconds +
		'</span>';
	console.log(leadingMiliSeconds);
}

playPauseBtn.addEventListener('click', () => {
	if (timerStatus == 'stopped') {
		timerStatus = 'started';
		runBtn.remove('fa-play');
		runBtn.add('fa-pause');
		playPauseBtn.style.backgroundColor = '#02505C';
		timerInterval = setInterval(stopWatch, 10);
	} else {
		timerStatus = 'stopped';
		runBtn.remove('fa-pause');
		runBtn.add('fa-play');
		playPauseBtn.style.backgroundColor = 'green';
		window.clearInterval(timerInterval);
	}
});

resetBtn.addEventListener('click', () => {
	window.clearInterval(timerInterval);
	miliSeconds = 0;
	seconds = 0;
	minutes = 0;
	hours = 0;
	timerStatus = 'stopped';
	runBtn.remove('fa-pause');
	runBtn.add('fa-play');
	playPauseBtn.style.backgroundColor = 'green';
	timer.innerHTML = '00:00:00<span class="mili">.0000</span>';
});
