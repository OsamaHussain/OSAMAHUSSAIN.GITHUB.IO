// Variables
let timer = document.querySelector(".timer");
let playPauseBtn = document.querySelector(".playPauseBtn");
let resetBtn = document.querySelector(".resetBtn");
let runBtn = playPauseBtn.children[0].classList;
let seconds = 0;
let minutes = 0;
let hours = 0;
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;
let timerStatus = "stopped";
let timerInterval = null;

// Functions and Event Listners
playPauseBtn.addEventListener('click', ()=>{
    function stopWatch(){
        seconds++
        if (seconds/60==1) {seconds=0;minutes++;
            if (minutes/60==1) {minutes=0;hours++;}
        }
        (seconds < 10) ? leadingSeconds = "0" + seconds.toString() : leadingSeconds = seconds;
        (minutes < 10) ? leadingMinutes = "0" + minutes.toString() : leadingMinutes = minutes;
        (hours < 10) ? leadingHours = "0" + hours.toString() : leadingHours = hours;
        timer.innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
    }
    if (timerStatus == "stopped") {
        timerStatus = "started";
        runBtn.remove('fa-play');
        runBtn.add('fa-pause');
        playPauseBtn.style.backgroundColor = "#02505C";
        timerInterval = window.setInterval(stopWatch, 1000);
    }else {
        timerStatus = "stopped";
        runBtn.remove('fa-pause');
        runBtn.add('fa-play');
        playPauseBtn.style.backgroundColor = "green";
        window.clearInterval(timerInterval);
    }
});

resetBtn.addEventListener('click', ()=>{
    window.clearInterval(timerInterval);
    seconds=0; minutes=0; hours=0;
    timerStatus = "stopped";
    runBtn.remove('fa-pause');
    runBtn.add('fa-play');
    playPauseBtn.style.backgroundColor = "green";
    timer.innerText = "00:00:00";
});