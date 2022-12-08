// Stop Watch Start
var min = 0
var sec = 0
var miliSec = 0

var displayMin = document.getElementById("displayMin");
var displaySec = document.getElementById("displaySec");
var displayMilisec = document.getElementById("displayMilisec");

var interval;

function timer() {
    miliSec++
    if (miliSec == 10) {
        miliSec = 0;
        sec++;
        displaySec.innerHTML = sec;
        if (sec == 60) {
            sec = 0;
            min++;
        }
    }
    displayMilisec.innerHTML = miliSec;
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;
}


function startTimer() {
    interval = setInterval(function () {
        timer()
    }, 100)
}

function pauseTimer() {
    clearInterval(interval);
}

function resetTimer() {

    min = 0
    sec = 0
    miliSec = 0
    displayMilisec.innerHTML = miliSec;
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;
}
// Stop Watch End

// Count Down Timer Start
var countDownDate = new Date("Dec 31, 2022 0:0:0");
var update = setInterval(function () {
    var now = new Date().getTime();
    var TimeLeft = countDownDate - now;
    var days = Math.floor(TimeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((TimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((TimeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((TimeLeft % (1000 * 60)) / 1000);
    document.getElementById("daysLeft").innerHTML = days + "d &nbsp;";
    document.getElementById("hoursLeft").innerHTML = + hours + "h &nbsp;";
    document.getElementById("minutesLeft").innerHTML = + minutes + "m &nbsp;";
    document.getElementById("secondsLeft").innerHTML = + seconds + "s";
}, 1000);
// Count Down Timer End